import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardsCombinationsResult } from 'src/app/interfaces/CardsCombinationsResult';
import { CardsCombination } from 'src/app/interfaces/CardsCombination';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'validation-amount',
  templateUrl: './validation-amount.component.html',
  styleUrls: ['./validation-amount.component.css']
})
export class ValidationAmountComponent {

  @Input() amount : number = 0;
  @Output() desiredAmount = new EventEmitter<number>();
  public data?: CardsCombinationsResult;
  public activeValueCards?: CardsCombination;
  public error: boolean = false;

  constructor(private giftApi: GiftService) { }

  updateAmount(): void {
    this.desiredAmount.emit(this.amount);
  }

  selectCardsCombination(cardsCombination: CardsCombination): void {
    this.amount = cardsCombination.value;
    this.updateAmount();
    this.activeValueCards = cardsCombination;
  }

  private resetAllValidationData() : void {
    this.data = undefined;
    this.activeValueCards = undefined;
    this.error = false;
  }

  validationAmount(): void {
    this.resetAllValidationData();
    this.giftApi.searchCombinations(this.amount).subscribe({
      next: (data) => {
        this.data = data;
        this.activeValueCards = this.data.equal ?? this.activeValueCards;
        if (this.data.ceil && !this.data.floor) {
          this.selectCardsCombination(this.data.ceil);
        }
        if (!this.data.ceil && this.data.floor) {
          this.selectCardsCombination(this.data.floor);
        }
      },
      error: () => {
        this.error = true;
      }
    });
  }
}
