import { Component, OnInit, HostListener, ElementRef, Renderer } from '@angular/core';
import { Character } from '../character';
import { CHARS } from '../mock-chars';
import { ActivatedRoute } from "@angular/router";
import { $ } from 'protractor';
//import { AfterViewInit, Component, ElementRef} from '@angular/core';




@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.css']
  
})

/*class selectImage {
  constructor(private el: ElementRef, private renderer: Renderer){
  }

  @HostListener('click') onClick() {
    window.alert('Host Element Clicked');
}
  backgroundColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
}
}*/

export class CharDetailComponent implements OnInit {
  
  character: Character;
  selected:string;

  constructor(private route: ActivatedRoute, private el: ElementRef, private renderer: Renderer) { }
  
  
  previews = document.querySelectorAll(".images img");
  
 /* @HostListener('click') onClick() {
    const highlight = document.querySelector(".gallery-highlight");
    const previews = document.querySelectorAll(".images img");
    console.log(previews);
  }*/


  // imageGallery(){
  //   let highlight = document.querySelector(".gallery-highlight");
  //   let previews = document.querySelectorAll(".images img");
  //   previews.forEach(preview => {preview.addEventListener("click", function(){
  //       console.log(preview);
  //     })
  //   })
  // }

  ngOnInit() {
    this.character = CHARS.find(({uri}) => uri == this.route.snapshot.paramMap.get("uri"));
    this.selected = this.character.images[0];
  }

  
}
