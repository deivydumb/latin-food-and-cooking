import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesLatinFoodComponent } from './detalles-latin-food/detalles-latin-food.component';

const routes: Routes = [
  {path:'', redirectTo:'/',pathMatch: 'full'},
  {path: 'detalles-latin-food/:id',component: DetallesLatinFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
