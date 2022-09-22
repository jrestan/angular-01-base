import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

/*interface Personaje{
  nombre: string,
  poder: number
}*/

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  //styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  /*
  agregar(event: any){
    event.preventDefault();
    console.log(event)
    console.log("Heyy...")
  }*/

  nuevo: Personaje ={
    nombre: 'Trunks',
    poder: 14000
  }


  // personajes: Personaje[] = [
  //   {
  //     nombre: 'Goku',
  //     poder: 14500
  //   },
  //   {
  //     nombre: 'Vegeta',
  //     poder: 7000
  //   }
  // ]

  //esto funciona bien con servicios
  //personajes: Personaje[] = [];  //se comanta para probar con get

  
  //probando con get
  /*
  get personajes(): Personaje[] {
    return this.dbzServices.personajes;
  }*/

  /*
  agregar(){
    if(this.nuevo.nombre.trim().length===0){ return; }
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    
    this.nuevo = { //Con esto se purga porque si no se hace esto aun luego de hacer el push this.nuevo sigue amarrado con el objeto anterior
      nombre: '',  //al hacer esto es como estar creando un nuevo objeto para "this.nuevo"
      poder: 0
    };
  }*/

  /*
  onNuevoPersonaje(argumento: Personaje){
    this.personajes.push(argumento);
  }*/

  /*
  cambiarNombre(event: any){
    console.log(event.target.value);
  }*/
  
  //si este servicio DbzService lo inicializo en otro lado igual ese se inicializara solo una vez
  /*
  constructor( private dbzServices: DbzService) {
    //esto funciona bien con servicios //se comenta para progar con get
    //this.personajes = this.dbzServices.personajes;
  }*/
  constructor() {}


  ngOnInit(): void { }
}
