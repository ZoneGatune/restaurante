import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { BoletaService } from '../boleta/shared/boletaservice';
import { Boleta } from '../boleta/shared/boleta.model';
import { MesaCrudService } from '../mesa-crud/shared/mesaCrudService';
import { DatePipe } from '@angular/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-ranking-pollo',
  templateUrl: './ranking_pollo.component.html',
  styleUrls: ['./ranking_pollo.component.scss']
})
export class RankingPolloComponent implements OnInit {

  constructor(private mesaCrudService: MesaCrudService,
    private boletaService: BoletaService,
     private tostr: ToastrService,
     private datePipe: DatePipe) { }
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: Array<any> = [];
  showResponsiveTableCode;
  boletaList: Boleta[];

  selectedValue;
  showMultiListCode = false;
  value = 'Clear me';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  emailFormControls = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
    matcher = new MyErrorStateMatcher();


    ngOnInit() {
      const date = new Date();
      const fecha = this.datePipe.transform(date, 'yyyy-MM-dd');
      const x = this.boletaService.getDataRequest(fecha);
      x.snapshotChanges().subscribe(item => {
        this.boletaList = [];
        item.forEach(element => {
          const y = element.payload.toJSON();
          y['$key'] = element.key;
          this.boletaList.push(y as Boleta);
        });
    });

    this.boletaList.forEach(element => {

      console.log(element);
    });



  }
}
