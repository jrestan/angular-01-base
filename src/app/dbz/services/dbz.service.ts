import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService{ //Este servicio se debe agregar en al dbz.module.ts en un apartado adicional llamado "providers"

    private _personajes: Personaje[]=[
        {
            nombre: 'Goku',
            poder: 14500
        },
        {
            nombre: 'Vegeta',
            poder: 7000
        }
    ];

    get personajes(): Personaje[] {
        //return this._personajes;   //normalmente estos objetos son mandados por referencia* como si fueran punteros
        return [...this._personajes]; //esto es una buena practica de java. Los "..." es el poderador spread, rompe la referencia,, 
                                      //hace que el que lo reciba cree una nueva copia, y no modifique esta.
    }

    constructor(){
        console.log("Servicio inicializado");
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

}