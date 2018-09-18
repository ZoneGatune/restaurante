import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { CartaService } from '../carta/shared/cartaservice';
import { Carta } from '../carta/shared/carta.model';
import { Categoria } from '../carta/shared/categoria.model';

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

  constructor(private cartaService: CartaService, private tostr: ToastrService) { }
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: Array<any> = [];
  showResponsiveTableCode;
  CartaList: Carta[];
  categorias = new Array<Categoria>();   // Use any array supports different kind objects

  selectedValue;
  showMultiListCode = false;
  value = 'Clear me';


  matcher = new MyErrorStateMatcher();

  loadCategorias() {
    this.categorias.push({'id': '01', 'name': 'Menu s/7','description': 'Incluye Entrada'});
    this.categorias.push({'id': '02', 'name': 'Menu s/8','description': 'Incluye Entrada'});
    this.categorias.push({'id': '03', 'name': 'Menu s/9','description': 'Incluye Entrada'});
    this.categorias.push({'id': '04', 'name': 'Pollo a la Brasa','description': 'Incluye Papas y ensalada'});
    this.categorias.push({'id': '05', 'name': 'Ceviche','description': 'Incluye Canchita'});
    this.categorias.push({'id': '06', 'name': 'A la Carta','description': 'No incluye entrada'});
 }

  ngOnInit() {

    this.loadCategorias();


  }

}
