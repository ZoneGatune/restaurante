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
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss'],
  providers: [VentaSeleccionadaService]
})
export class Menu2Component implements OnInit {

  constructor(private cartaService: CartaService, private tostr: ToastrService,
    private route: ActivatedRoute,
    private ventaSeleccionadaService: VentaSeleccionadaService,
    public router: Router,
    private firebase: AngularFireDatabase ) { }
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
  ventaList: VentaSeleccionada[];
  mesa: string;
  codigoMesa: string;
  codigoMozo: string;
  mozo: string;
  ventaListAngular: AngularFireList<any>;

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
      const d = new Date();
      const weekday = new Array(7);
      weekday[0] =  '07';
      weekday[1] = '01';
      weekday[2] = '02';
      weekday[3] = '03';
      weekday[4] = '04';
      weekday[5] = '05';
      weekday[6] = '06';

      const diaSemana = weekday[d.getDay()];

      this.cartaList = this.cartaList.filter( x => x.codigoDia === diaSemana);
      this.cartaList = this.cartaList.filter( x => x.codigoCategoria === '04');
    });


    this.route.queryParams
    .subscribe(params => {
      console.log(params); // {order: "popular"}

      this.ventaKey = params['ventaKey'];
      this.mozo = params['mozo'];
      this.codigoMozo = params['codigoMozo'];
      this.codigoMesa = params['codigoMesa'];
      this.mesa = params['mesa'];

    });

    const xVentaSeleccionada = this.ventaSeleccionadaService.getData();
    xVentaSeleccionada.snapshotChanges().subscribe(item => {
      this.ventasList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.ventasList.push(y as VentaSeleccionada);
      });

      this.ventaSeleccionada = this.ventasList.find( x => x.$key === this.ventaKey);

    });

  }

  retroceder() {
    this.router.navigate(['/auth/restaurant/listaMenu'], {
      queryParams: {'ventaKey': this.ventaSeleccionada.$key,
                    'codigoMesa': this.ventaSeleccionada.codigoMesa,
                    'mesa': this.ventaSeleccionada.mesa,
                    'mozo': this.ventaSeleccionada.mozo,
                    'codigoMozo': this.ventaSeleccionada.codigoMozo } });
  }

  agregarEntrada(entrada: Carta) {
    debugger;

    //this.ventaSeleccionada = this.ventaList.find( x => x.codigoMesa === this.codigoMesa);
    debugger;
    if (this.ventaSeleccionada) {
      this.cartaSeleccionada = entrada;

      //agregando solo la carta.

      const currentTime = new Date();
      const year = currentTime.getFullYear();
      const month = currentTime.getMonth();
      const day = currentTime.getDate();

      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      const miliseconds = currentTime.getMilliseconds();

      this.carta1 = new  Carta1();
      this.carta1.key = entrada.$key + year + month + day + hours + minutes + seconds + miliseconds;
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
      const peopleArray = Object.keys(this.ventaSeleccionada.cartaList).map(i => this.ventaSeleccionada.cartaList[i]);
      peopleArray.push(this.carta1);
      this.ventaSeleccionada.cartaList = peopleArray;
    }
    debugger;

    this.tostr.success('Submitted Succcessfully', 'Usted añadio platos');
    debugger;

  }

  updateVentaAngular(ventaKey: string, venta: VentaSeleccionada) {
    debugger;
    this.ventaListAngular = this.firebase.list('ventas');
    debugger;
    //const list = this.firebase.object(`https://restaurante1-6523c.firebaseio.com/ventas/` + ventaKey).set(venta);

    this.ventaListAngular.update(ventaKey,
      {
        id: venta.id,
        estado: venta.estado,
        fecha: venta.fecha,
        cartaList: venta.cartaList
      });
  }

  grabarMenu() {

    this.updateVentaAngular(this.ventaSeleccionada.$key, this.ventaSeleccionada);

    debugger;
    this.router.navigate(['/auth/restaurant/listaMenu'], {
      queryParams: {'ventaKey': this.ventaSeleccionada.$key,
                    'codigoMesa': this.ventaSeleccionada.codigoMesa,
                    'mesa': this.ventaSeleccionada.mesa,
                    'mozo': this.ventaSeleccionada.mozo,
                    'codigoMozo': this.ventaSeleccionada.codigoMozo } });
  }



  eliminarEntrada(entrada: Carta) {
    debugger;
    this.cartaSeleccionada = entrada;
    debugger;
  }

}
