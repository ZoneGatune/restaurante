import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Carta } from './carta.model';

@Injectable()
export class CartaService {
  cartaList: AngularFireList<any>;
  selectedCarta: Carta = new Carta();


  constructor(private firebase: AngularFireDatabase ) {


   }

  getData() {
    this.cartaList = this.firebase.list('carta');
    return this.cartaList;
  }

  insertCarta(carta: Carta) {

    if (!this.cartaList) {
      this.cartaList = this.getData();
    }
      this.cartaList.push({
        dia: carta.dia,
        plato: carta.plato,
        entrada: carta.entrada,
        categoria: carta.categoria
    });

  }

  updateCarta(carta: Carta) {
    this.cartaList.update(carta.$key,
      {
        dia: carta.dia,
        plato: carta.plato,
        entrada: carta.entrada,
        categoria: carta.categoria
      });
  }

  deleteCarta($key: string) {
    this.cartaList.remove($key);
  }

}
