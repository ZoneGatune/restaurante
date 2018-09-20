import { Menu } from './../plato/shared/menu.model';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { MesaCrud } from '../mesa-crud/shared/mesa-crud.model';
import { MesaCrudService } from '../mesa-crud/shared/mesaCrudService';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado/shared/empleado.model';
import { MozoMesaService } from './shared/mozoMesaService';
import { MozoMesa } from './shared/mozo-mesa.model';
import * as moment from 'moment/moment';
import { ErrorStateMatcher } from "@angular/material/core";
import {formatDate } from '@angular/common';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss'],
  providers:[MozoMesaService]
})
export class MesaComponent implements OnInit {

  today = new Date();
  mesaCrudList: MesaCrud[];
  mozoMesaList: MozoMesa[];
  mozoMesaActivadasList: MozoMesa[];
  empleado: Empleado = new Empleado();
  mozoMesa: MozoMesa = new MozoMesa();
  mesaEncontrada: MesaCrud = new MesaCrud();

  constructor(private mesaCrudService: MesaCrudService,
    public router: Router,
    private mozoMesaService: MozoMesaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.queryParams);
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // {order: "popular"}
      let e = new Empleado();
      Object.assign(e, params);
      this.empleado = e;
      console.log(this.empleado); // popular
    });


    const x = this.mesaCrudService.getData();
    x.snapshotChanges().subscribe(item => {
      this.mesaCrudList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.mesaCrudList.push(y as MesaCrud);
      });

    });


    const xMozoMesa = this.mozoMesaService.getData();
    xMozoMesa.snapshotChanges().subscribe(item => {
      this.mozoMesaList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.mozoMesaList.push(y as MozoMesa);
      });
      debugger;
      this.mozoMesaActivadasList = this.mozoMesaList.filter( x => x.codigoMozo === this.empleado.username);
      debugger;
    });


  }

  mozoMesaOcupadasList: MozoMesa[];

  Onclick(mesa: string) {
debugger;
    this.mozoMesaOcupadasList = this.mozoMesaList.filter( x => x.codigoMesa === mesa);
    debugger;
    if (this.mozoMesaOcupadasList.length >= 1) {
      this.router.navigate(['/auth/restaurant/listaMenu']);
    } else {
      this.mesaEncontrada = this.mesaCrudList.find( x => x.numero === mesa);
      this.mozoMesa.codigoMesa = this.mesaEncontrada.numero;
      this.mozoMesa.mesa = this.mesaEncontrada.nombre;
      this.mozoMesa.codigoMozo = this.empleado.username;
      this.mozoMesa.mozo = this.empleado.nombre;
      this.mozoMesa.estado = 'ocupado';
      this.mozoMesa.fecha = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-ES', 'UTC -5');
      this.mozoMesaService.insertMozoMesa(this.mozoMesa);
      this.router.navigate(['/auth/restaurant/listaMenu']);
    }



    // this.router.navigate(['/auth/guarded-routes/', { outlets: { popup: [ 'example' ] }}]);
  }

}
