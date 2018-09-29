import { MenuCartaCriollaComponent } from './contenedor-menu/menu-carta-criolla.component';
import { CartaCriollaComponent } from './carta-criolla/carta-criolla.component';
import { ListaMenuComponent } from './lista-menu/lista-menu.component';
import { MesaCrudComponent } from './mesa-crud/mesa-crud.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { RolComponent } from './rol/rol.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MesaComponent } from './mesa/mesa.component';
import { PlatoComponent } from './plato/plato.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CartaComponent } from './carta/carta.component';
import { Menu1Component } from './contenedor-menu/menu1.component';
import { Menu2Component } from './contenedor-menu/menu2.component';
import { LoginMozoComponent } from './login-mozo/login-mozo.component';

const pagesRoutes: Routes = [
    { path: 'mesa', component: MesaComponent , data: { animation: 'mesa' } },
    { path: 'plato', component: PlatoComponent , data: { animation: 'plato' } },
    { path: 'categoria', component: CategoriaComponent , data: { animation: 'categoria' } },
    { path: 'rol', component: RolComponent , data: { animation: 'rol' } },
    { path: 'empleado', component: EmpleadoComponent , data: { animation: 'empleado' } },
    { path: 'mesaCrud', component: MesaCrudComponent , data: { animation: 'mesaCrud' } },
    { path: 'carta', component: CartaComponent , data: { animation: 'carta' } },
    { path: 'listaMenu', component: ListaMenuComponent , data: { animation: 'listaMenu' } },
    { path: 'menu1', component: Menu1Component , data: { animation: 'menu1' } },
    { path: 'menu2', component: Menu2Component , data: { animation: 'menu2' } },
    { path: 'loginMozo', component: LoginMozoComponent , data: { animation: 'loginMozo' } },
    { path: 'cartaCriolla', component: CartaCriollaComponent , data: { animation: 'cartaCriolla' } },
    { path: 'menuCartaCriolla', component: MenuCartaCriollaComponent , data: { animation: 'menuCartaCriolla' } },
  //	{ path: 'about', component: AboutComponent ,data: { animation: 'about' }},
  //	{ path: 'services', component: ServicesComponent ,data: { animation: 'services' }},
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class RestaurantRouterModule {}
