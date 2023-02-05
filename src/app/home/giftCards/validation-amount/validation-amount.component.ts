import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardsCombinationsResult } from 'src/app/interfaces/CardsCombinationsResult';
import { CalculatorComponentValue } from 'src/app/interfaces/CalculatorComponentValue';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'validation-amount',
  templateUrl: './validation-amount.component.html',
  styleUrls: ['./validation-amount.component.css']
})
export class ValidationAmountComponent {

  @Input() cardsCombination : CalculatorComponentValue = {} as CalculatorComponentValue;
  @Output() desiredCardsCombination = new EventEmitter<CalculatorComponentValue>();
  public data?: CardsCombinationsResult;
  public error: boolean = false;

  constructor(private giftApi: GiftService) { }

  updateCardsCombination(): void {
    this.desiredCardsCombination.emit(this.cardsCombination);
  }

  selectCardsCombination(cardsCombination: CalculatorComponentValue): void {
    this.cardsCombination = cardsCombination;
    this.updateCardsCombination();
  }

  private resetAllValidationData() : void {
    this.data = undefined;
    this.cardsCombination.cards = [];
    this.error = false;
  }

  validationAmount(): void {
    this.resetAllValidationData();
    this.giftApi.searchCombinations(this.cardsCombination.value).subscribe({
      next: (data) => {
        this.data = data;
        if (this.data.equal) {
          this.selectCardsCombination(this.data.equal)
        }
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
