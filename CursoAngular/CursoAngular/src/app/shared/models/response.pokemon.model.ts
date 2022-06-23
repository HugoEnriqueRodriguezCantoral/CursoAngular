import { Pokemon } from "./pokemon.model";

export class ResposePokemon{
    public count?: number;
    public next?:string ;
    public previous?:string;
    public results?:Array<Pokemon>;
}