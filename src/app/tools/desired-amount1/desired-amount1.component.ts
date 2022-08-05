import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-desired-amount1',
  templateUrl: './desired-amount1.component.html',
  styleUrls: ['./desired-amount1.component.css']
})
export class DesiredAmount1Component implements OnInit {

  public amount: number = 0;
  @Output() desiredAmount = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  
  updateAmount() {
    this.desiredAmount.emit(this.amount);
  }

}
