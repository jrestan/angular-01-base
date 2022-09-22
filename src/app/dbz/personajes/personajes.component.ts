import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
  //styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  //Se asume que PersonajesComponent es un componente hijo

  //@Input()
  //Podria ser de las dos formas
  //con la primera asume por defecto que es personajes en main-page.component.html
  //@Input() personajes: Personaje[] = [];
  
  //con la segunda asume que es _person, entonces en main-page.component.html la llamada a esta clase <app-personajes> se indica [_person] en el parametro
  //@Input('_person') personajes: Personaje[] = [];

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) { 

  }
  ngOnInit(): void { }

}
