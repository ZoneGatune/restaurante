import { CuadreCaja } from './cuadre-caja.model';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class CuadreCajaService {
  cuadreCajaList: AngularFireList<any>;
  cuadreCaja: CuadreCaja = new CuadreCaja();

  constructor(private firebase: AngularFireDatabase,
    private datePipe: DatePipe ) {

   }

  getDataRequest(fecha: string) {
    this.cuadreCajaList = this.firebase.list(fecha + '_' + 'cuadre-caja');
    return this.cuadreCajaList;
  }

  insertCuadreCaja(cuadreCaja: CuadreCaja, fecha: string) {
    debugger;
    if (!this.cuadreCajaList) {
      this.cuadreCajaList = this.getDataRequest(fecha);
    }
    this.cuadreCajaList.push({
      saldoFinal: cuadreCaja.saldoFinal,
      saldoInicial: cuadreCaja.saldoInicial,
      fecha: cuadreCaja.fecha,
      fechaHora: cuadreCaja.fechaHora,
    });
  }

  updateCuadreCaja(cuadreCaja: CuadreCaja, fecha: string) {
    this.cuadreCajaList.update(cuadreCaja.$key, {
      saldoFinal: cuadreCaja.saldoFinal,
      saldoInicial: cuadreCaja.saldoInicial,
      fecha: cuadreCaja.fecha,
      fechaHora: cuadreCaja.fechaHora,
    });
  }
}
