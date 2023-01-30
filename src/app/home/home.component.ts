import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public amount: number = 0;

  setAmount(value: number): void {
    this.amount = value;
  }

}
