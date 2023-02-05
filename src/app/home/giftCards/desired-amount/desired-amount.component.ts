import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CalculatorComponentValue } from 'src/app/interfaces/CalculatorComponentValue';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'desired-amount',
  templateUrl: './desired-amount.component.html',
  styleUrls: ['./desired-amount.component.css']
})
export class DesiredAmountComponent {

  @Input() public cardsCombination: CalculatorComponentValue = {} as CalculatorComponentValue;
  @Output() desiredCardsCombination = new EventEmitter<CalculatorComponentValue>();
  public error: boolean = false;

  constructor(private giftApi: GiftService) { }
  
  updateCardsCombination(): void {
    this.error = false;
    this.desiredCardsCombination.emit(this.cardsCombination);
  }

  nextAmount(): void {
    this.error = false;
    this.giftApi.searchCombinations(this.cardsCombination.value + 1).subscribe({
      next: (data) => {
        this.cardsCombination.value = data.ceil ? data.ceil.value : this.cardsCombination.value;
        this.updateCardsCombination();
      },
      error: () => {
        this.error = true;
      }
    });
  }

  previousAmount(): void {
    this.error = false;
    this.giftApi.searchCombinations(this.cardsCombination.value - 1).subscribe({
      next: (data) => {
        this.cardsCombination.value = data.floor ? data.floor.value : this.cardsCombination.value;
        this.updateCardsCombination();
      },
      error: () => {
        this.error = true;
      }
    });
  }

}
