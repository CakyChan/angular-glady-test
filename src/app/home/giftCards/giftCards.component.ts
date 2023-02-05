import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CalculatorComponentValue } from 'src/app/interfaces/CalculatorComponentValue';

@Component({
  selector: 'giftCards',
  templateUrl: './giftCards.component.html',
  styleUrls: ['./giftCards.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => GiftCardsComponent),
    }
  ]
})
export class GiftCardsComponent implements ControlValueAccessor {

  public cardsCombination: CalculatorComponentValue = {} as CalculatorComponentValue;
  private onChange: any = () => {}
  private onTouch: any = () => {}
  public disabled = false;
  set value(val: CalculatorComponentValue){
    this.cardsCombination = val;
    this.onChange(val);
    this.onTouch(val);
  }
  writeValue(obj: CalculatorComponentValue): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
