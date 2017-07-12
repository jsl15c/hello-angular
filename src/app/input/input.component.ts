import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  message:string = 'Select an option';
  mySelection:string;
  userName:string;

  // this variable is used to store the
  // product info from inputs
  product:object={};

  constructor() { }

  ngOnInit() {
  }

  reactToSelection() {
    if (this.mySelection === 'bell') {
      this.message = 'Lovely';
    }
    else {
      this.message = 'A fine selection';
    }
  }

  createProduct() {
    console.log(this.product);
  }
}
