import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARS } from '../mock-chars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
