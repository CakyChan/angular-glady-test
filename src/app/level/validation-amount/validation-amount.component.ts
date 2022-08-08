import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-amount',
  templateUrl: './validation-amount.component.html',
  styleUrls: ['./validation-amount.component.css']
})
export class ValidationAmountComponent implements OnInit {

  @Input() amount : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
