import { MenuService } from './../plato/shared/menuservice';
import { Menu } from './../plato/shared/menu.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-pollo-brasa',
  templateUrl: './pollo-brasa.component.html',
  styleUrls: ['./pollo-brasa.component.scss']
})
export class PolloBrasaComponent implements OnInit {

  constructor(private menuService: MenuService, private tostr: ToastrService) { }
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: Array<any> = [];
  showResponsiveTableCode;
  menuList: Menu[];
  matcher = new MyErrorStateMatcher();
  menu: Menu = new Menu();

  ngOnInit() {

    this.resetForm();
    const x = this.menuService.getData();
    x.snapshotChanges().subscribe(item => {
      this.menuList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.menuList.push(y as Menu);
      });
      this.menuList = this.menuList.filter( x => x.codigoCategoria === '30');
    });

  }

  onEdit(emp: Menu) {
    this.menuService.selectedMenu = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this Menu ?') === true) {
      this.menuService.deletemenu(key);
      this.tostr.warning('Deleted Successfully', 'Menu register');
    }
  }

  onSubmit(menuForm: NgForm) {
    this.menu = menuForm.value;
    this.menu.codigoCategoria = '30';
    this.menu.categoria = 'Pollo Brasa';
    this.menu.contadorNegativo = 0;
    this.menu.contadorPositivo = 0;
    if (this.menu.descripcion === undefined) {
      this.menu.descripcion = '';
    }
    if (menuForm.value.$key == null) {
      this.menuService.insertmenu(this.menu);
    } else {
      this.menuService.updatemenu(this.menu);
    }
    this.resetForm(menuForm);
    this.tostr.success('Submitted Succcessfully', 'rol Register');
  }

  resetForm(menuForm?: NgForm) {
    if (menuForm != null) { menuForm.reset(); }
    this.menuService.selectedMenu = {
      $key: null,
      nombre: '',
      descripcion: '',
      precio: '',
      categoria: '',
      codigoMenu: 0,
      codigoCategoria: '',
      contadorNegativo: 0,
      contadorPositivo: 0
    };
  }

}
