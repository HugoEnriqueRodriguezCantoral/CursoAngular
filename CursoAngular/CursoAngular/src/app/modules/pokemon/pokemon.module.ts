import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonesComponent } from './pages/pokemones/pokemones.component';
import { PokemonPipe } from './pages/pokemones/pokemon.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonCreateComponent } from './pages/pokemon-create/pokemon-create.component';




@NgModule({
  declarations: [
    PokemonesComponent,
    PokemonPipe,
    PokemonCreateComponent,
    
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class PokemonModule { }
