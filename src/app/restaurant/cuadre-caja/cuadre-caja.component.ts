import { CuadreCajaService } from './shared/cuadrecajaservice';
import { element } from 'protractor';
import { BoletaFinal } from './../boleta/shared/boletaFinal.model';
import { BoletaService } from './../boleta/shared/boletaservice';
import { Boleta } from './../boleta/shared/boleta.model';
import { CuadreCaja } from './shared/cuadre-caja.model';
import { MenuService } from './../plato/shared/menuservice';
import { Menu } from './../plato/shared/menu.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { ReturnStatement } from '@angular/compiler';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-cuadre-caja',
  templateUrl: './cuadre-caja.component.html',
  styleUrls: ['./cuadre-caja.component.scss']
})
export class CuadreCajaComponent implements OnInit {

  constructor(private menuService: MenuService,
    private datePipe: DatePipe,
    private cuadreCajaService: CuadreCajaService,
    public snackBar: MatSnackBar,
    private boletaService: BoletaService, private tostr: ToastrService) { }
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: Array<any> = [];
  showResponsiveTableCode;
  matcher = new MyErrorStateMatcher();
  menu: Menu = new Menu();
  cuadreCaja: CuadreCaja = new CuadreCaja();
  boletaList: BoletaFinal[];
  mensaje: string;
  total: number;
  message = 'Ingresar Saldo Inicial';
  action = 'Finalizar';

  ngOnInit() {

  }

  generarCuadre() {
    debugger;
    if (this.cuadreCaja.saldoInicial === undefined) {
      this.tostr.error('Error', 'Saldo Inicial es necesario');
      this.snackBar.open(this.message, this.action, {
        duration: 2000,
      });
      return;
    }
    const date = new Date();
    const fecha = this.datePipe.transform(date, 'yyyy_MM_dd');
    this.total = 0;
    const x = this.boletaService.getDataRequest(fecha);
    x.snapshotChanges().subscribe(item => {
      this.boletaList = [];
      item.forEach(_element => {
        const y = _element.payload.toJSON();
      //  y['$key'] = element.key;
        this.boletaList.push(y as BoletaFinal);

      });
      debugger;
      if (this.boletaList) {
        const peopleArray = Object.keys(this.boletaList).map(i => this.boletaList[i]);

        this.boletaList = peopleArray;
        this.boletaList.forEach( (_element) => {
          this.total = Number( _element.total + this.total);
          debugger;
        });
        this.cuadreCaja.saldoFinal = Number(this.cuadreCaja.saldoInicial) + this.total;
        const fechaHora = this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
        this.cuadreCaja.fecha = this.datePipe.transform(date, 'yyyy-MM-dd');
        this.cuadreCaja.fechaHora = fechaHora;
        debugger;
      }
  });



}

  guardarCuadreCaja() {
    debugger;
    if (this.cuadreCaja.saldoInicial === undefined) {
      this.tostr.error('Error', 'Saldo Inicial es necesario');
      this.snackBar.open(this.message, this.action, {
        duration: 2000,
      });
      return;
    }
    const date = new Date();
    const fechaHoy =  this.datePipe.transform(date, 'yyyy-MM-dd');
    this.cuadreCajaService.insertCuadreCaja(this.cuadreCaja, fechaHoy);
    this.snackBar.open('Cuadre Ingresasdo ' + fechaHoy , this.action, {
      duration: 2000,
    });
  }
}
