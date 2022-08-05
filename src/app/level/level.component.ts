import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  public amount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setAmount(value: any) {
    this.amount = value;
  }

}
