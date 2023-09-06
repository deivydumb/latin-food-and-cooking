import {Component, OnInit} from '@angular/core';
import {Platos} from "../mock-platos";
import {Plato} from "../Plato";

@Component({
  selector: 'app-modal-latin-food',
  templateUrl: './modal-latin-food.component.html',
  styleUrls: ['./modal-latin-food.component.css']
})
export class ModalLatinFoodComponent implements OnInit{
  platos:any
  listaPaisesConIdComida = {};

  ngOnInit() {
    this.platos = Platos;


  }

}
