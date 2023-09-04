import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLatinFoodComponent } from './header-latin-food/header-latin-food.component';
import { CarouselLatinFoodComponent } from './carousel-latin-food/carousel-latin-food.component';
import { CardsLatinFoodComponent } from './cards-latin-food/cards-latin-food.component';
import { FooterLatinFoodComponent } from './footer-latin-food/footer-latin-food.component';
import { ModalLatinFoodComponent } from './modal-latin-food/modal-latin-food.component';
import { DetallesLatinFoodComponent } from './detalles-latin-food/detalles-latin-food.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLatinFoodComponent,
    CarouselLatinFoodComponent,
    CardsLatinFoodComponent,
    FooterLatinFoodComponent,
    ModalLatinFoodComponent,
    DetallesLatinFoodComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
