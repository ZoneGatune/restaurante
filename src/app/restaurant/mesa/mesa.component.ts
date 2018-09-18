import { Component, OnInit } from '@angular/core';
import { MesaCrud } from '../mesa-crud/shared/mesa-crud.model';
import { MesaCrudService } from '../mesa-crud/shared/mesaCrudService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit {


  mesaCrudList: MesaCrud[];


  constructor(private mesaCrudService: MesaCrudService,
    public router: Router) { }

  ngOnInit() {

    const x = this.mesaCrudService.getData();
    x.snapshotChanges().subscribe(item => {
      this.mesaCrudList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.mesaCrudList.push(y as MesaCrud);
      });

    });


  }

  Onclick() {

    this.router.navigate(['/auth/restaurant/listaMenu']);
    // this.router.navigate(['/auth/guarded-routes/', { outlets: { popup: [ 'example' ] }}]);
  }

}
