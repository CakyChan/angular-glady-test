import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CalculatorComponentValue } from '../interfaces/CalculatorComponentValue';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeForm: FormGroup<{
    giftCardsCombination: FormControl<CalculatorComponentValue|null>
  }>

  constructor(private formBuilder: FormBuilder) {
    this.homeForm = this.formBuilder.group({
      giftCardsCombination: this.formBuilder.control({value: 0, cards: []} as CalculatorComponentValue)
    })
  }

  public submit() : void {
    console.log(this.homeForm.value);
  }
}
