import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importar ngBootstrap
import{NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
//import { PokemonComponent } from './pokemon/pokemon.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './core/interceptors/base-url.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    //PokemonComponent,     
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:BaseUrlInterceptor, multi: true},
    {provide: 'BASE_API_URL', useValue:environment.apiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
