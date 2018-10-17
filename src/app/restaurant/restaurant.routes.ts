import { MenuParillaComponent } from './contenedor-menu/menu-parrilla.component';
import { ParrillaComponent } from './parrillas/parrilla.component';
import { MenuPostreComponent } from './contenedor-menu/menu-postre.component';
import { PostreComponent } from './postre/postre.component';
import { MenuPolloBrasaComponent } from './contenedor-menu/menu-pollo-brasa.component';
import { MenuMarinoComponent } from './contenedor-menu/menu-marino.component';
import { MenuBebidaComponent } from './contenedor-menu/menu-bebida.component';
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
import { BebidaComponent } from './bebida/bebida.component';
import { PolloBrasaComponent } from './pollo-brasa/pollo-brasa.component';
import { BoletaComponent } from './boleta/boleta.component';
import { CartaMarinaComponent } from './carta-marina/carta-marina.component';
import { MenuCartaMarinoComponent } from './contenedor-menu/menu-carta-marino.component';

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
    { path: 'bebida', component: BebidaComponent , data: { animation: 'bebida' } },
    { path: 'menuBebida', component: MenuBebidaComponent , data: { animation: 'menuBebida' } },
    { path: 'menuMarino', component: MenuMarinoComponent , data: { animation: 'menuMarino' } },
    { path: 'polloBrasa', component: PolloBrasaComponent , data: { animation: 'polloBrasa' } },
    { path: 'menuPolloBrasa', component: MenuPolloBrasaComponent , data: { animation: 'menuPolloBrasa' } },
    { path: 'postre', component: PostreComponent , data: { animation: 'postre' } },
    { path: 'menuPostre', component: MenuPostreComponent , data: { animation: 'menuPostre' } },
    { path: 'boleta', component: BoletaComponent , data: { animation: 'boleta' } },
    { path: 'parrilla', component: ParrillaComponent , data: { animation: 'parrilla' } },
    { path: 'menuParrilla', component: MenuParillaComponent , data: { animation: 'menuParrilla' } },
    { path: 'cartaMarina', component: CartaMarinaComponent , data: { animation: 'cartaMarina' } },
    { path: 'menuCartaMarina', component: MenuCartaMarinoComponent , data: { animation: 'menuCartaMarina' } },


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
