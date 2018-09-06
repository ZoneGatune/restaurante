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
        ReactiveFormsModule ],
    declarations: [
        MesaComponent,
        PlatoComponent
    ],
    exports: [
    ],
    providers: [
      MenuService,
    ]
})
export class RestaurantModule {
}
