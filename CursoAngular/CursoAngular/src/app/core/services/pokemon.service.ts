import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResposePokemon } from '../../shared/models/response.pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  _url= 'pokemon'

  getAll<Data>():Observable<ResposePokemon> {

    const url = `${this._url}?limit=100&offset=200`;
    
    return this.http.get<ResposePokemon>(url);
  }
}
