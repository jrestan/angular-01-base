import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Maria','Jorge','Luis','Alfonso','Pedro','Daniela','Milusca'];

  heroesDele: string[] = [];

  heroeDel: string = "";

  borrarHeroe():void{
    if(this.heroes.length>0){
      //this.heroes.splice(this.heroes.length-1); //borra un elemento del array en la posicion indicada en el parametro
      //this.heroes.shift(); //borra el primer elemento del array
      //this.heroes.pop(); //borra el ultimo elemento del array
      
      /*
      const heroeDel = this.heroes.pop(); //borra el ultimo elemento del array
      if(heroeDel!=undefined){
        this.heroesDele.push(heroeDel);
      }*/
      
      this.heroeDel = this.heroes.pop()||''; //Aqui si es undefined devuelve un valor vacio
      this.heroesDele.push(this.heroeDel);  //no va a llegar a ser vacio porque el if length esta validando
    }
  }

  constructor() { }
  ngOnInit(): void {
  }
}
