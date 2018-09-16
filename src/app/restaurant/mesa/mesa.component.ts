import { Component, OnInit } from '@angular/core';
import { MesaCrud } from '../mesa-crud/shared/mesa-crud.model';
import { MesaCrudService } from '../mesa-crud/shared/mesaCrudService';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit {


  mesaCrudList: MesaCrud[];


  constructor(private mesaCrudService: MesaCrudService) { }

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
}
