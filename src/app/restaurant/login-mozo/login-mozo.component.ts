import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { CartaService } from '../carta/shared/cartaservice';
import { Carta } from '../carta/shared/carta.model';
import { Categoria } from '../carta/shared/categoria.model';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-login-mozo',
  templateUrl: './login-mozo.component.html',
  styleUrls: ['./login-mozo.component.scss']
})
export class LoginMozoComponent implements OnInit {

  constructor(private cartaService: CartaService, private tostr: ToastrService, public router: Router) { }
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: Array<any> = [];
  showResponsiveTableCode;
  cartaList: Carta[];
  categorias = new Array<Categoria>();   // Use any array supports different kind objects

  selectedValue;
  showMultiListCode = false;
  value = 'Clear me';
  codigoMozo: string;


  matcher = new MyErrorStateMatcher();


  ngOnInit() {




  }

  onSubmit(codigo: string) {
    debugger;
    this.router.navigate(['/auth/restaurant/mesa']);
    // this.router.navigate(['/auth/guarded-routes/', { outlets: { popup: [ 'example' ] }}]);
    this.resetForm();
    this.tostr.success("Submitted Succcessfully", "Bienvenido");
  }

  resetForm() {
   this.codigoMozo = "";
 }  

}
