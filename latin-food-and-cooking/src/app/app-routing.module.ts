import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesLatinFoodComponent } from './detalles-latin-food/detalles-latin-food.component';
import {CardsLatinFoodComponent} from "./cards-latin-food/cards-latin-food.component";
import {PrincipalComponent} from "./principal/principal.component";
import {ModalLatinFoodComponent} from "./modal-latin-food/modal-latin-food.component";
import {AgregarComponent} from "./agregar/agregar.component";

const routes: Routes = [
  {path:'', redirectTo:'/cards-latin-food',pathMatch: 'full'},
  {path: 'detalles-latin-food/:id',component: DetallesLatinFoodComponent},
  {path: 'cards-latin-food',component: CardsLatinFoodComponent},
  {path: 'principal',component: PrincipalComponent},
  {path: 'paises',component: ModalLatinFoodComponent},
  {path: 'agregar',component:AgregarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
