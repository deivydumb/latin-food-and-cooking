import {Component, OnInit} from '@angular/core';
import  {Platos} from "../mock-platos";
import {Plato} from "../Plato";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  platos: any

  id = 0
  imagen= "https://previews.123rf.com/images/orla/orla1307/orla130700374/21138688-gente-3d-hombre-persona-y-signo-de-interrogaci%C3%B3n-confusi%C3%B3n.jpg"
  ngOnInit() {
    this.platos = Platos;
    console.log(this.platos);


  }

  llamarImagen() {
    this.platos = Platos;
    const indiceAleatorio = Math.floor(Math.random() * this.platos.length);

// Obtener el elemento aleatorio utilizando el índice
    const elementoAleatorio = this.platos[indiceAleatorio];
    this.imagen = elementoAleatorio.imagen;
    this.id =elementoAleatorio.id

  }
}
