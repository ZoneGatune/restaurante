import { VentaBoleta } from './../../lista-menu/shared/ventaBoleta.model';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Boleta } from './boleta.model';
import { VentaSeleccionada } from '../../lista-menu/shared/venta.model';
import { BoletaFinal } from './boletaFinal.model';


@Injectable()
export class BoletaService {
  boletaList: AngularFireList<any>;
  selectedBoleta: BoletaFinal = new BoletaFinal();
  venta: VentaBoleta = new VentaBoleta();


  constructor(private firebase: AngularFireDatabase ) {


   }

  getData() {
    this.boletaList = this.firebase.list('boleta');
    return this.boletaList;
  }

  insertBoleta(boleta: Boleta) {
    debugger;
    if (!this.boletaList) {
      this.boletaList = this.getData();
    }
    this.venta = new VentaBoleta();
    this.venta.cartaList = boleta.venta.cartaList;
    this.venta.codigoMesa = boleta.venta.codigoMesa;
    this.venta.mesa = boleta.venta.mesa;
    this.venta.codigoMozo = boleta.venta.codigoMozo;
    this.venta.mozo = boleta.venta.mozo;
    this.venta.fecha = boleta.venta.fecha;
    this.venta.estado = boleta.venta.estado;
    this.venta.key = boleta.venta.$key;
    this.venta.id = boleta.venta.id;


      this.boletaList.push({
        venta: this.venta,
        total: boleta.total,
        totalPlatos: boleta.totalPlatos,
        estado: boleta.estado,
        mesa: boleta.mesa,
        codigoMesa: boleta.codigoMesa
      });

  }

  updateCarta(boleta: Boleta) {
    this.boletaList.update(boleta.$key,
      {
        venta: boleta.venta,
        total: boleta.total,
        totalPlatos: boleta.totalPlatos,
        estado: boleta.estado,
        mesa: boleta.mesa,
        codigoMesa: boleta.codigoMesa
      });
  }

  deleteCarta($key: string) {
    this.boletaList.remove($key);
  }

}
