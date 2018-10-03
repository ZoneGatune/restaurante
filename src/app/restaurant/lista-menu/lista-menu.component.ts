import { Carta1 } from './../carta/shared/carta1.model';
import { VentaSeleccionada } from './shared/venta.model';
import { VentaSeleccionadaService } from './shared/ventaService';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { CartaService } from '../carta/shared/cartaservice';
import { Carta } from '../carta/shared/carta.model';
import { Categoria } from '../carta/shared/categoria.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-lista-menu',
  templateUrl: './lista-menu.component.html',
  styleUrls: ['./lista-menu.component.scss']
})
export class ListaMenuComponent implements OnInit {

  constructor(private cartaService: CartaService, private tostr: ToastrService, public router: Router ,
    private route: ActivatedRoute, private ventaSeleccionadaService: VentaSeleccionadaService) {
      this.mostrarVentaList = [];
    }
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: Array<any> = [];
  showResponsiveTableCode;
  CartaList: Carta[];
  ventaList: VentaSeleccionada[];
  categorias = new Array<Categoria>();   // Use any array supports different kind objects

  selectedValue;
  showMultiListCode = false;
  value = 'Clear me';
  ventaKey: string;
  mesa: string;
  codigoMesa: string;
  codigoMozo: string;
  mozo: string;
  ventaSeleccionada: VentaSeleccionada = new VentaSeleccionada();
  mostrarVentaList = new Array<Carta1>();
  listaVentaActualizada = new Array<Carta1>();

  matcher = new MyErrorStateMatcher();

  loadCategorias() {
    this.categorias.push({'id': '01', 'name': 'Menú Criollo s/ 9', 'description': 'Incluye Entrada'});
    this.categorias.push({'id': '04', 'name': 'Menu Ejecutivo s/ 12', 'description': 'Incluye Entrada'});
    this.categorias.push({'id': '20', 'name': 'Carta Criolla', 'description': ''});
    this.categorias.push({'id': '07', 'name': 'Menú Marino', 'description': ''});
    this.categorias.push({'id': '08', 'name': 'Carta Marina', 'description': ''});
    this.categorias.push({'id': '09', 'name': 'Entradas o Adicionales', 'description': ''});
    this.categorias.push({'id': '30', 'name': 'Pollos a la Brasa', 'description': ''});
    this.categorias.push({'id': '10', 'name': 'Parrilas', 'description': ''});
    this.categorias.push({'id': '25', 'name': 'Bebidas', 'description': ''});
 }

  ngOnInit() {

    this.loadCategorias();


    this.route.queryParams
    .subscribe(params => {
      console.log(params); // {order: "popular"}

      this.ventaKey = params['ventaKey'];
      this.mozo = params['mozo'];
      this.codigoMozo = params['codigoMozo'];
      this.codigoMesa = params['codigoMesa'];
      this.mesa = params['mesa'];

    });

    debugger;

    const x = this.ventaSeleccionadaService.getData();
      x.snapshotChanges().subscribe(item => {
        this.ventaList = [];
        item.forEach(element => {
          const y = element.payload.toJSON();
          y['$key'] = element.key;
          this.ventaList.push(y as VentaSeleccionada);

        });
        // debugger; this.menuObj = this.menuList.find( x => x.codigoMenu === this.carta.codigoMenu);
        debugger;
        this.ventaSeleccionada = this.ventaList.find( x => x.codigoMesa === this.codigoMesa);
        debugger;
        if (this.ventaSeleccionada.cartaList) {
          const peopleArray = Object.keys(this.ventaSeleccionada.cartaList).map(i => this.ventaSeleccionada.cartaList[i]);
          debugger;
          this.mostrarVentaList = peopleArray;
          console.log(this.mostrarVentaList);
        }

        // debugger;
      });

  }

  Onclick(categoria: Categoria) {
    debugger;
    if (categoria.id === '01') {
      this.router.navigate(['/auth/restaurant/menu1'], {
        queryParams: {'ventaKey': this.ventaKey,
                      'codigoMesa': this.codigoMesa,
                      'mesa': this.mesa,
                      'mozo': this.mozo,
                      'codigoMozo': this.codigoMozo } });
    }
    if (categoria.id === '04') {
      this.router.navigate(['/auth/restaurant/menu2'], {
        queryParams: {'ventaKey': this.ventaKey,
                      'codigoMesa': this.codigoMesa,
                      'mesa': this.mesa,
                      'mozo': this.mozo,
                      'codigoMozo': this.codigoMozo } });
    }
    if (categoria.id === '20') {
      this.router.navigate(['/auth/restaurant/menuCartaCriolla'], {
        queryParams: {'ventaKey': this.ventaKey,
                      'codigoMesa': this.codigoMesa,
                      'mesa': this.mesa,
                      'mozo': this.mozo,
                      'codigoMozo': this.codigoMozo } });
    }
    if (categoria.id === '25') {
      this.router.navigate(['/auth/restaurant/menuBebida'], {
        queryParams: {'ventaKey': this.ventaKey,
                      'codigoMesa': this.codigoMesa,
                      'mesa': this.mesa,
                      'mozo': this.mozo,
                      'codigoMozo': this.codigoMozo } });
    }
    if (categoria.id === '07') {
      this.router.navigate(['/auth/restaurant/menuMarino'], {
        queryParams: {'ventaKey': this.ventaKey,
                      'codigoMesa': this.codigoMesa,
                      'mesa': this.mesa,
                      'mozo': this.mozo,
                      'codigoMozo': this.codigoMozo } });
    }
    if (categoria.id === '30') {
      this.router.navigate(['/auth/restaurant/menuPolloBrasa'], {
        queryParams: {'ventaKey': this.ventaKey,
                      'codigoMesa': this.codigoMesa,
                      'mesa': this.mesa,
                      'mozo': this.mozo,
                      'codigoMozo': this.codigoMozo } });
    }
  }

  onDelete(carta1: Carta1) {
    debugger;
    this.mostrarVentaList = this.mostrarVentaList.filter(obj => obj.key !== carta1.key);
    this.ventaSeleccionada.cartaList = this.mostrarVentaList;
    this.ventaSeleccionadaService.updateVenta(this.ventaSeleccionada.$key, this.ventaSeleccionada);
    debugger;

  }

}
