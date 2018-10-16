import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Boleta } from './boleta.model';


@Injectable()
export class BoletaService {
  boletaList: AngularFireList<any>;
  selectedBoleta: Boleta = new Boleta();


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
      this.boletaList.push({
        venta: boleta.venta,
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
