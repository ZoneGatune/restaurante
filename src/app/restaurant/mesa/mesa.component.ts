
import { Component, OnInit } from '@angular/core';
import { MesaCrud } from '../mesa-crud/shared/mesa-crud.model';
import { MesaCrudService } from '../mesa-crud/shared/mesaCrudService';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado/shared/empleado.model';
import { MozoMesaService } from './shared/mozoMesaService';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit {


  mesaCrudList: MesaCrud[];
  empleado: Empleado = new Empleado();


  constructor(private mesaCrudService: MesaCrudService,
    public router: Router,
    private mozoMesaService: MozoMesaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.queryParams);
    debugger;
    this.route.queryParams
    .subscribe(params => {
      debugger;
      console.log(params); // {order: "popular"}
      let e = new Empleado();
      Object.assign(e, params);
      this.empleado = e;
      console.log(this.empleado); // popular
    });
    debugger;

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
