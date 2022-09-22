import { Injectable } from "@angular/core";

@Injectable()
export class DbzService{ //Este servicio se debe agregar en al dbz.module.ts en un apartado adicional llamado "providers"

    constructor(){
        console.log("Servicio inicializado");
    }

}