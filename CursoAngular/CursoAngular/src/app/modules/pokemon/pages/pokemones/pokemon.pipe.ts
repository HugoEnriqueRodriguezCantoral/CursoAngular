import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonPipe implements PipeTransform {

  transform(value?: Array<any>, query?:string): any {
    let val = value;
    if(query !==undefined && query.trim().length>0){
      val = value?.filter(x=>x.name.includes(query.toLowerCase()));
      //console.log(value);
    }
    return val;
  }

}
