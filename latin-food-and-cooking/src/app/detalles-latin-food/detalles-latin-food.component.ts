import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Plato } from '../Plato';
import { Platos } from '../mock-platos';

@Component({
  selector: 'app-detalles-latin-food',
  templateUrl: './detalles-latin-food.component.html',
  styleUrls: ['./detalles-latin-food.component.css']
})
export class DetallesLatinFoodComponent implements OnInit {


  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router :Router

  ){}
  platos: Plato[]=[];
  plato: Plato = {
    id : 0,
    nombre: '',
    descripcion: '',
    pais:'',
    imagen: '',
    ingredientes: []
  };
  searchTerm: string = '';
  foundPlato: Plato | undefined;

  ngOnInit() {
    this.platos= Platos
    this.route.params.subscribe(params => {
      const id = +params['id'];
      const plato = this.platos.find(plato => plato.id === id);
      if (plato) {
        this.plato = plato;
        console.log(plato)
      } else {
        console.log(`No se encontró el héroe con ID ${id}`);
      }
    });
  }
}
