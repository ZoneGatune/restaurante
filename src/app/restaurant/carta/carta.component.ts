import { Menu } from './../plato/shared/menu.model';
import { Categoria } from './shared/categoria.model';
import { Dia } from './shared/dia.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { Carta } from './shared/carta.model';
import { CartaService } from './shared/cartaservice';
import { MenuService } from '../plato/shared/menuservice';
import { filter } from 'rxjs/operators';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {

  dias = new Array<Dia>();   // Use any array supports different kind objects
  categorias = new Array<Categoria>();   // Use any array supports different kind objects


     loadDias() {
        this.dias.push({'id': '01', 'name': 'Lunes'});
        this.dias.push({'id': '02', 'name': 'Martes'});
        this.dias.push({'id': '03', 'name': 'Miercoles'});
        this.dias.push({'id': '04', 'name': 'Jueves'});
        this.dias.push({'id': '05', 'name': 'Viernes'});

        this.dias.push({'id': '06', 'name': 'Sabado'});
        this.dias.push({'id': '07', 'name': 'Domingo'});
     }

     loadCategorias() {
      this.categorias.push({'id': '01', 'name': '7'});
      this.categorias.push({'id': '02', 'name': '8'});
      this.categorias.push({'id': '03', 'name': '9'});
      this.categorias.push({'id': '04', 'name': 'Pollo'});
      this.categorias.push({'id': '05', 'name': 'Ceviche'});
      this.categorias.push({'id': '06', 'name': 'Entrada'});
   }

  constructor(private cartaService: CartaService,
    private menuService: MenuService,
    private tostr: ToastrService) { }


  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: Array<any> = [];
  showResponsiveTableCode;
  cartaList: Carta[];
  menuList =  new Array<Menu>();
  menuAjaxList = new Array<Menu>();



  ngOnInit() {

    this.loadDias();
    this.loadCategorias();
    this.resetForm();
    const x = this.cartaService.getData();
    x.snapshotChanges().subscribe(item => {
      this.cartaList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.cartaList.push(y as Carta);
      });
    });

    const varMenu = this.menuService.getData();
    varMenu.snapshotChanges().subscribe(item => {
      this.menuList == new Array<Menu>();
      item.forEach(element => {
        const varMenuY = element.payload.toJSON();
        varMenuY['$key'] = element.key;
        this.menuList.push(varMenuY as Menu);
      });
    });

    debugger;
    this.menuAjaxList = this.menuList.filter( x => x.categoria === '01');
    debugger;
  }

  onEditCarta(emp: Carta) {
    this.cartaService.selectedCarta = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.cartaService.deleteCarta(key);
      this.tostr.warning('Deleted Successfully', 'carta register');
    }
  }

  onSubmit(cartaForm: NgForm) {
    if (cartaForm.value.$key == null) {
      this.cartaService.insertCarta(cartaForm.value);
    } else {
      this.cartaService.updateCarta(cartaForm.value);
    }
    this.resetForm(cartaForm);
    this.tostr.success('Submitted Succcessfully', 'carta Register');
  }

  resetForm(cartaForm?: NgForm) {
    if (cartaForm != null) {
      cartaForm.reset();
    }
    this.cartaService.selectedCarta = {
      $key: null,
      dia: '',
      plato: '',
      entrada: '',
      categoria: ''


    };
  }
}
