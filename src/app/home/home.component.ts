import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public amount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setAmount(value: any): void {
    this.amount = value;
  }

}
