import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
  //styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //@Input('_person') personajes: Personaje[] = [];  //ya no va
  
  @Input('_nuevo') nuevo: Personaje ={  //Se importa tambien para que aparezcan los valores iniciales de "nuevo" del main-page {'Trust'}
    nombre: '',
    poder: 0
  }

  //con servicio ya no se usa esto..
  //con esto se emitia eventos a la clase padre
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length===0){ return; }
    console.log(this.nuevo);
    
    //this.personajes.push(this.nuevo);
    
    //con servicio ya no se usa esto..
    //con esto se emitia eventos a la clase padre
    //this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);
    
    this.nuevo = { //Con esto se purga porque si no se hace esto aun luego de hacer el push this.nuevo sigue amarrado con el objeto anterior
      nombre: '',  //al hacer esto es como estar creando un nuevo objeto para "this.nuevo"
      poder: 0
    };
  }

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void { }

}
