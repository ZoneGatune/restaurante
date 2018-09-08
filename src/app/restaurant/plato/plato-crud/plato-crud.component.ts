import { Categoria } from './../../categoria/shared/categoria.model';
import { CategoriaService } from './../../categoria/shared/categoriaservice';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { input_HELPERS, Messages, Links } from '../helpers.data';
import { MenuService } from '../shared/menuservice';
import { ToastrService } from 'ngx-toastr';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-plato-crud',
  templateUrl: './plato-crud.component.html',
  styleUrls: ['./plato-crud.component.scss']
})
export class PlatoCrudComponent implements OnInit {

  constructor(private menuService: MenuService,
    private categoriaService: CategoriaService,
    private tostr: ToastrService) { }
    selectedValue: string;
  InputHelpers: any = input_HELPERS;
	links = Links;
	showMultiListCode: boolean = false;
	messages = Messages;
	value = 'Clear me';
	emailFormControl = new FormControl('', [
		Validators.required,
		Validators.email,
	]);
	emailFormControls = new FormControl('', [
		Validators.required,
		Validators.pattern(EMAIL_REGEX)]);
	matcher = new MyErrorStateMatcher();
  categoriaList: Categoria[];
	ngOnInit() {

    this.resetForm();
    var x = this.categoriaService.getData();
    x.snapshotChanges().subscribe(item => {
      this.categoriaList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.categoriaList.push(y as Categoria);
      });
    });
  }

  onSubmit(menuForm: NgForm) {

    this.selectedValue;

    if (menuForm.value.$key == null){
      debugger;
      //menuForm.value.categoria = this.selectedValue;
      debugger;
      this.menuService.insertmenu(menuForm.value);
    }

    else{
      this.menuService.updatemenu(menuForm.value);}

    debugger;
    this.resetForm(menuForm);
    this.tostr.success('Submitted Succcessfully', 'Menu Register');
  }

  resetForm(menuForm?: NgForm) {
    if (menuForm != null)
      menuForm.reset();
    this.menuService.selectedMenu = {
      $key: null,
      nombre: '',
      descripcion: '',
      precio: '',
      categoria: 0,


    }
  }

}
