import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  urlBase: string = "https://rickandmortyapi.com/api/character/";

  constructor( private httpClient: HttpClient ) { }

  getByPage(url:string = this.urlBase) : Promise<any>{
    return this.httpClient.get<any>(url).toPromise();
  }

  getById(idCharacter: number) : Promise<Character>{
    return this.httpClient.get<Character>(this.urlBase + idCharacter).toPromise();
  }
}
