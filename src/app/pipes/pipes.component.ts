import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  randomText:string;
  rightNow: Date = new Date();
  currentBitCoinInvestment:number = 10000;

  theRocks:object[] = [
    {name:'Stacked Rocks', pic:'https://media.giphy.com/media/JyaWADqS3NKus/giphy.gif'},
    {name:'Smooth Rocks', pic:'https://media.giphy.com/media/11FE8T4qPYx3O0/giphy.gif'},
    {name:'One Rock', pic:'https://media.giphy.com/media/Prj0QeRKdQpAQ/giphy.gif'},
    {name:'Water Rocks', pic:'https://media.giphy.com/media/jcd6ky1oVtImk/giphy.gif'}
  ];

  rockSearchText:string = '';

  constructor() { }

  ngOnInit() {
  }

  addOneHour() {
    const upDate = new Date(this.rightNow);
    upDate.setHours(this.rightNow.getHours() + 1);
    this.rightNow = upDate;
  }
}
