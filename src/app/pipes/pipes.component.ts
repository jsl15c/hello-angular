import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  randomText:string;
  rightNow: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  addOneHour() {
    const upDate = new Date(this.rightNow);
    upDate.setHours(this.rightNow.getHours() + 1);
    this.rightNow = upDate;
  }
}
