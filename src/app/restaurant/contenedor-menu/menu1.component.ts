import { Carta1 } from './../carta/shared/carta1.model';
import { VentaSeleccionadaService } from './../lista-menu/shared/ventaService';
import { VentaSeleccionada } from './../lista-menu/shared/venta.model';
import { CartaSeleccionadaService } from './shared/cartaSeleccionadaservice';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { CartaService } from '../carta/shared/cartaservice';
import { Carta } from '../carta/shared/carta.model';
import { Categoria } from '../carta/shared/categoria.model';
import { CartaSeleccionada } from './shared/cartaSeleccionada.model';
import { ActivatedRoute } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.scss'],
  providers: [VentaSeleccionadaService]
})
export class Menu1Component implements OnInit {

  constructor(private cartaService: CartaService, private tostr: ToastrService,
    private route: ActivatedRoute,
    private ventaSeleccionadaService: VentaSeleccionadaService) { }
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: Array<any> = [];
  showResponsiveTableCode;
  cartaList: Carta[];
  entradaList: Carta[];
  categorias = new Array<Categoria>();   // Use any array supports different kind objects
  ventaKey: string;
  selectedValue;
  showMultiListCode = false;
  value = 'Clear me';
  ventaSeleccionada: VentaSeleccionada = new VentaSeleccionada();
  cartaSeleccionada: CartaSeleccionada = new CartaSeleccionada();
  carta1: Carta1 = new Carta1();
  cartaSeleccionadas = new Array<Carta1>();
  ventasList: VentaSeleccionada[];

  matcher = new MyErrorStateMatcher();



  ngOnInit() {

    this.cartaSeleccionadas = [];
    const x = this.cartaService.getData();
    x.snapshotChanges().subscribe(item => {
      this.cartaList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.cartaList.push(y as Carta);
      });
      this.entradaList = this.cartaList;
      this.cartaList = this.cartaList.filter( x => x.codigoDia === '01');
      this.cartaList = this.cartaList.filter( x => x.codigoCategoria === '01');
      this.entradaList = this.entradaList.filter( x => x.codigoCategoria === '10');
      this.entradaList = this.entradaList.filter( x => x.codigoDia === '01');
    });


    this.route.queryParams
    .subscribe(params => {
      console.log(params); // {order: "popular"}
      this.ventaKey = params['ventaKey'];
    });
    const xVentaSeleccionada = this.ventaSeleccionadaService.getData();
    xVentaSeleccionada.snapshotChanges().subscribe(item => {
      this.ventasList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.ventasList.push(y as VentaSeleccionada);
      });
      debugger;
      this.ventaSeleccionada = this.ventasList.find( x => x.$key === this.ventaKey);
      debugger;    });

  }



  agregarEntrada(entrada: Carta){

    debugger;
    this.cartaSeleccionada = entrada;
    //agregando solo la carta.
    this.carta1 = new  Carta1();
    this.carta1.key = entrada.$key;
    this.carta1.categoria = entrada.categoria;
    this.carta1.codigoCategoria = entrada.codigoCategoria;
    this.carta1.codigoMenu = entrada.codigoMenu;
    this.carta1.descripcion = entrada.descripcion;
    this.carta1.plato = entrada.plato;
    this.carta1.precio = entrada.precio;
    this.cartaSeleccionadas.push(this.carta1);
    debugger;
    if (this.ventaSeleccionada.cartaList === undefined) {
      this.ventaSeleccionada.cartaList = new Array<Carta1>();
    }
    this.ventaSeleccionada.cartaList = this.cartaSeleccionadas;

    this.ventaSeleccionadaService.updateVenta(this.ventaSeleccionada.$key, this.ventaSeleccionada);

    debugger;
  }
  eliminarEntrada(entrada: Carta) {
    debugger;
    this.cartaSeleccionada = entrada;
    debugger;
  }

}
