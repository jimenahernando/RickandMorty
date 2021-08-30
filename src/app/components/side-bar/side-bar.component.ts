import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  arrCharacters: Character[];
  next: string;
  prev: string;
  constructor(private charactersService: CharactersService) {
    this.arrCharacters = [];
    this.next = '';
    this.prev = '';
  }

  async ngOnInit() {
    const result = await this.charactersService.getByPage();
    this.next = result.info.next;
    this.prev = result.info.prev;
    console.log(result);
    this.arrCharacters = result.results;
  }
  
  async prevPage(){
    if(this.prev){
      const result = await this.charactersService.getByPage(this.prev);
      this.next = result.info.next;
      this.prev = result.info.prev;
      this.arrCharacters = result.results;
    }
  }
  
  async nextPage(){
    if(this.next){
      const result = await this.charactersService.getByPage(this.next);
      this.next = result.info.next;
      this.prev = result.info.prev;
      this.arrCharacters = result.results;
    }
  }
}
