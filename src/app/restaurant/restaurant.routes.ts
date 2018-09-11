import { EmpleadoComponent } from './empleado/empleado.component';
import { RolComponent } from './rol/rol.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MesaComponent } from './mesa/mesa.component';
import { PlatoComponent } from './plato/plato.component';
import { CategoriaComponent } from './categoria/categoria.component';

const pagesRoutes: Routes = [
    { path: 'mesa', component: MesaComponent , data: { animation: 'mesa' } },
    { path: 'plato', component: PlatoComponent , data: { animation: 'plato' } },
    { path: 'categoria', component: CategoriaComponent , data: { animation: 'categoria' } },
    { path: 'rol', component: RolComponent , data: { animation: 'rol' } },
    { path: 'empleado', component: EmpleadoComponent , data: { animation: 'empleado' } },
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
