import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { GiftApi } from 'src/app/interfaces/GiftApi';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-desired-amount',
  templateUrl: './desired-amount.component.html',
  styleUrls: ['./desired-amount.component.css']
})
export class DesiredAmountComponent implements OnInit {

  @Input() public amount: number = 0;
  @Output() desiredAmount = new EventEmitter<number>();
  public data : GiftApi | null = null;

  constructor(private giftApi: GiftService) { }

  ngOnInit(): void {
  }
  
  updateAmount() {
    this.desiredAmount.emit(this.amount);
  }

  nextAmount() {
    this.giftApi.searchCombinaison(this.amount + 1).subscribe((data)=>{
      this.data = data;
      if (this.data?.ceil) {
        this.amount = this.data.ceil.value;
      }
      this.updateAmount();
    });
  }

  previousAmount() {
    this.giftApi.searchCombinaison(this.amount - 1).subscribe((data)=>{
      this.data = data;
      if (this.data?.floor) {
        this.amount = this.data.floor.value;
      }
      this.updateAmount();
    });
  }

}
