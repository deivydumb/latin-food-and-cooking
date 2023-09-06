import { Component,OnInit,NgZone,ElementRef,Renderer2,ViewChild,AfterViewInit } from '@angular/core';
import { Platos } from '../mock-platos';
import { Plato } from '../Plato';
@Component({
  selector: 'app-cards-latin-food',
  templateUrl: './cards-latin-food.component.html',
  styleUrls: ['./cards-latin-food.component.css']
})
export class CardsLatinFoodComponent implements OnInit{
  @ViewChild('myModal') myModal!: ElementRef;
  modal = false;
  platos: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.platos = Platos;
    console.log(this.platos);


  }
}



