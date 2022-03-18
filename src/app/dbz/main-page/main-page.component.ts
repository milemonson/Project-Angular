import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.intefaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
  
})
export class MainPageComponent {
personajes: Personaje[] = [
  {
    nombre:'Mikasa',
    poder: 15000
  },
  {
    nombre:'Eren',
    poder: 8000
  }
];
nuevo: Personaje = {
nombre:'Zeke',
poder:1000
}

}
