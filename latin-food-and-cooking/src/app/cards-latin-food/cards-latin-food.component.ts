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
  platos: any; // Asegúrese de que Platos esté declarado y tenga el tipo adecuado

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.platos = Platos; // Asegúrate de que Platos esté definido en tu componente o importado adecuadamente
    console.log(this.platos);
  
  }
}
  
  
  
