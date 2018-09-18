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
  selector: 'app-menu1',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss']
})
export class Menu2Component implements OnInit {

  constructor(private cartaService: CartaService, private tostr: ToastrService) { }
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: Array<any> = [];
  showResponsiveTableCode;
  cartaList: Carta[];
  categorias = new Array<Categoria>();   // Use any array supports different kind objects

  selectedValue;
  showMultiListCode = false;
  value = 'Clear me';


  matcher = new MyErrorStateMatcher();


  ngOnInit() {

    const x = this.cartaService.getData();
    x.snapshotChanges().subscribe(item => {
      this.cartaList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.cartaList.push(y as Carta);
      });
//falta obtener elcodigo del dia
      this.cartaList = this.cartaList.filter( x => x.codigoDia === '01');
      this.cartaList = this.cartaList.filter( x => x.codigoCategoria === '02');

    });


  }


}
