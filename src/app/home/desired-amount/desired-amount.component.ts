import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'desired-amount',
  templateUrl: './desired-amount.component.html',
  styleUrls: ['./desired-amount.component.css']
})
export class DesiredAmountComponent {

  @Input() public amount: number = 0;
  @Output() desiredAmount = new EventEmitter<number>();
  public error: boolean = false;

  constructor(private giftApi: GiftService) { }
  
  updateAmount(): void {
    this.error = false;
    this.desiredAmount.emit(this.amount);
  }

  nextAmount(): void {
    this.error = false;
    this.giftApi.searchCombinations(this.amount + 1).subscribe({
      next: (data) => {
        this.amount = data.ceil ? data.ceil.value : this.amount;
        this.updateAmount();
      },
      error: () => {
        this.error = true;
      }
    });
  }

  previousAmount(): void {
    this.error = false;
    this.giftApi.searchCombinations(this.amount - 1).subscribe({
      next: (data) => {
        this.amount = data.floor ? data.floor.value : this.amount;
        this.updateAmount();
      },
      error: () => {
        this.error = true;
      }
    });
  }

}
