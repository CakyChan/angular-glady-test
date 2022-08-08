import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-desired-amount',
  templateUrl: './desired-amount.component.html',
  styleUrls: ['./desired-amount.component.css']
})
export class DesiredAmountComponent implements OnInit {

  public amount: number = 0;
  @Output() desiredAmount = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  
  updateAmount() {
    this.desiredAmount.emit(this.amount);
  }

  nextAmount() {
    this.updateAmount();
  }

  previousAmount() {
    this.updateAmount();
  }

}
