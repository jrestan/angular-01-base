import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
//import { HeroeComponent } from './Heroes/Heroe/heroe.component';
//import { ListadoComponent } from './Heroes/listado/listado.component';
import { HeroesModule } from './Heroes/Heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,
    //HeroeComponent,
    //ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
