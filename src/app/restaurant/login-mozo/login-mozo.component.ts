import { EmpleadoService } from './../empleado/shared/empleadoservice';
import { Empleado } from './../empleado/shared/empleado.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { CartaService } from '../carta/shared/cartaservice';
import { Carta } from '../carta/shared/carta.model';
import { Categoria } from '../carta/shared/categoria.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

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

  constructor(private cartaService: CartaService,
    private empleadoService: EmpleadoService , private tostr: ToastrService, public router: Router, public snackBar: MatSnackBar) { }
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: Array<any> = [];
  showResponsiveTableCode;
  cartaList: Carta[];
  categorias = new Array<Categoria>();   // Use any array supports different kind objects
  empleadoList: Empleado[];
  empleado: Empleado = new Empleado();

  selectedValue;
  showMultiListCode = false;
  value = 'Clear me';
  codigoMozo: string;
  message = 'El Usuario no existe como mozo en el restaurante Astrid';
  action = 'Finalizar';


  matcher = new MyErrorStateMatcher();


  ngOnInit() {





  }

  onSubmit(codigo: string) {
    debugger;
    const xLunes = this.empleadoService.getData();
    xLunes.snapshotChanges().subscribe(item => {
      this.empleadoList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.empleadoList.push(y as Empleado);
      });
      debugger;
      this.empleado = this.empleadoList.find( x => x.username === this.codigoMozo);
      if(this.empleado){
        debugger;
        this.router.navigate(['/auth/restaurant/mesa']);
        // this.router.navigate(['/auth/guarded-routes/', { outlets: { popup: [ 'example' ] }}]);
        this.resetForm();
        this.tostr.success('Submitted Succcessfully', 'Bienvenido');

      }else{
        this.tostr.error('Error', 'Codigo Erroneo');
        this.snackBar.open(this.message, this.action, {
          duration: 2000,
        });

      }

    });

  }

  resetForm() {
   this.codigoMozo = "";
 }

}
