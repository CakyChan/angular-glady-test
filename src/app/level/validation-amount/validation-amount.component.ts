import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GiftApi } from 'src/app/interfaces/GiftApi';
import { ValueCards } from 'src/app/interfaces/ValueCards';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-validation-amount',
  templateUrl: './validation-amount.component.html',
  styleUrls: ['./validation-amount.component.css']
})
export class ValidationAmountComponent implements OnInit {

  @Input() amount : number = 0;
  @Output() desiredAmount = new EventEmitter<number>();
  public data : GiftApi | null = null;
  public showValidation : boolean = false;
  public activeValueCards : ValueCards | null = null;

  constructor(private giftApi: GiftService) { }

  ngOnInit(): void {
  }

  updateAmount() {
    this.desiredAmount.emit(this.amount);
  }

  validationAmount() {
    this.showValidation = true;
    this.activeValueCards = null;
    this.giftApi.searchCombinaison(this.amount).subscribe((data)=>{
      this.data = data;
      if (this.data.equal) {
        this.activeValueCards = this.data.floor;
      }
      if (this.data.ceil && !this.data.floor) {
        this.selectAmount(this.data.ceil);
      }
      if (!this.data.ceil && this.data.floor) {
        this.selectAmount(this.data.floor);
      }
    });
  }

  selectAmount(amount: ValueCards) {
    this.amount = amount.value;
    this.updateAmount();
    this.activeValueCards = amount;
  }
}
