import { CategoriaService } from './categoria/shared/categoriaservice';
import { CategoriaComponent } from './categoria/categoria.component';
import { PlatoListComponent } from './plato/plato-list/plato-list.component';
import { NgModule } from '@angular/core';
import {
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
        MatTooltipModule,
        MatSortModule,
        MatPaginatorModule,
       } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '../core/core.module';
import { MesaComponent } from './mesa/mesa.component';
import { RestaurantRouterModule } from './restaurant.routes';
import { PlatoComponent } from './plato/plato.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuService } from './plato/shared/menuservice';
import { PlatoCrudComponent } from './plato/plato-crud/plato-crud.component';
import { MatTableModule } from '@angular/material/table';
import { CategoriaCrudComponent } from './categoria/categoria-crud/categoria-crud.component';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';


@NgModule({
    imports: [

    MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
        MatChipsModule,
        CoreModule,
        RestaurantRouterModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatSortModule
       ],
    declarations: [
        MesaComponent,
        PlatoComponent,
        PlatoCrudComponent,
        PlatoListComponent,
        CategoriaComponent,
        CategoriaCrudComponent,
        CategoriaListComponent
    ],
    exports: [
    ],
    providers: [
      MenuService,
      CategoriaService
    ]
})
export class RestaurantModule {
}
