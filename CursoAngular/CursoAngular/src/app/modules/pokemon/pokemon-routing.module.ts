import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCreateComponent } from './pages/pokemon-create/pokemon-create.component';
import { PokemonesComponent } from './pages/pokemones/pokemones.component';

const routes: Routes = [
  {path: 'pokemones',component: PokemonesComponent},
  {path: 'crear', component:PokemonCreateComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
