import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  isBigSize:boolean = false;
  hasColor:boolean = false;
  isComic:boolean = false;

  headerColor:string = 'black';

  constructor() { }

  // "ngOnInit()" called as soon as the component is loaded
  ngOnInit() {
    setInterval(() => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const randomRGB = `rgb(${r}, ${g}, ${b})`;
      this.headerColor = randomRGB;
    }, 300);
  }
  
  buttonA() {
    if (this.isBigSize) {
      this.isBigSize = false;
    }
    else {
      this.isBigSize = true;
    }
  }

  buttonB() {
    if (this.hasColor) {
      this.hasColor = false;
    }
    else {
      this.hasColor = true;
    }
  }

  buttonC() {
    if (this.isComic) {
      this.isComic = false;
    }
    else {
      this.isComic = true;
    }
  }


}
