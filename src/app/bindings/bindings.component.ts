import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
  // typescript syntax
  feedbackMessage:string = 'Please click on these buttons';
  imageUrl:string = 'https://media.giphy.com/media/12ShYpk3c82yjK/giphy.gif';
  clickCount:number = 0;
  isInputDisabled:boolean = false;
  buttonText:string = 'Disable This Input';

  constructor() { }

  ngOnInit() {
  }

  changeImage() {
    if (this.imageUrl === 'https://media.giphy.com/media/12ShYpk3c82yjK/giphy.gif') {
      this.imageUrl = 'https://media.giphy.com/media/zEde5snAaBoRi/giphy.gif';
    }
    else {
      this.imageUrl = 'https://media.giphy.com/media/12ShYpk3c82yjK/giphy.gif';
    }
  }

  changeMessage() {
    this.feedbackMessage = 'thanks for clicking!';
    this.clickCount += 1000000000000000000000**1000000000000000000000;
  }

  toggleInput() {
    if (this.isInputDisabled === false) {
      this.isInputDisabled = true;
      this.buttonText = 'Enable This Input';
    }
    else {
      this.isInputDisabled = false;
      this.buttonText = 'Disable This Input';
    }
  }
}
