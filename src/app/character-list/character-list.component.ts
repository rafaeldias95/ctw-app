import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARS } from '../mock-chars';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  selectedChar: Character;
  details: Character;
  chars = CHARS;

  constructor() {}

  ngOnInit() {
    
  }


  
  onHover(character: Character): void {
    this.selectedChar = character;
  }


}
