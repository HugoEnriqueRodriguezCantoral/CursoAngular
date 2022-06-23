import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { ResposePokemon } from 'src/app/shared/models/response.pokemon.model';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss']
})
export class PokemonesComponent implements OnInit {

  pokemonList : any;

  respose?: ResposePokemon;
  filterData='';
  paginacion: number=0;

  constructor(
    private pokemonService: PokemonService, 
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  
  openModal(pokemon: any, modal: any) {

    this.pokemonList = pokemon;

    this.modalService.open(modal);

  }

  private loadData(){
    this.pokemonService.getAll().pipe(first())
    .subscribe(data=>{
      if(data!==null){
        this.respose=data;
      }
      console.log(data);
    }, error=>{
      console.log(error);
    });
  }

  pokemones = [
    {nombre:'unown',id:201},
    {nombre:'wobbuffet',id:202},
    {nombre:'girafarig',id:203},
    {nombre:'pineco',id:204}

  ];
}
