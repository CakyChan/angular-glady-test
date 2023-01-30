import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GiftApi } from 'src/app/interfaces/GiftApi';
import { CalculatorComponentValue } from 'src/app/interfaces/CalculatorComponentValue';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'validation-amount',
  templateUrl: './validation-amount.component.html',
  styleUrls: ['./validation-amount.component.css']
})
export class ValidationAmountComponent implements OnInit {

  @Input() amount : number = 0;
  @Output() desiredAmount = new EventEmitter<number>();
  public data : GiftApi | null = null;
  public activeValueCards : CalculatorComponentValue | null = null;
  public error: boolean = false;

  constructor(private giftApi: GiftService) { }

  ngOnInit(): void {
  }

  updateAmount(): void {
    this.desiredAmount.emit(this.amount);
  }

  selectAmount(amount: CalculatorComponentValue): void {
    this.amount = amount.value;
    this.updateAmount();
    this.activeValueCards = amount;
  }

  resetAllValidationData() : void {
    this.data = null;
    this.activeValueCards = null;
    this.error = false;
  }

  validationAmount(): void {
    this.resetAllValidationData();
    this.giftApi.searchCombinaison(this.amount).subscribe({
      next: (data) => {
        this.data = data;
        this.activeValueCards = this.data.equal ? this.data.equal : this.activeValueCards;
        if (this.data.ceil && !this.data.floor) {
          this.selectAmount(this.data.ceil);
        }
        if (!this.data.ceil && this.data.floor) {
          this.selectAmount(this.data.floor);
        }
      },
      error: () => {
        this.error = true;
      }
    });
  }
}
