import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CardsCombinationsResult } from 'src/app/interfaces/CardsCombinationsResult';
import { CalculatorComponentValue } from 'src/app/interfaces/CalculatorComponentValue';
import { GiftService } from 'src/app/services/gift.service';

import { ValidationAmountComponent } from './validation-amount.component';

describe('ValidationAmountComponent', () => {
  let component: ValidationAmountComponent;
  let fixture: ComponentFixture<ValidationAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ValidationAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updateCardsCombination should be emit', () => {
    component.cardsCombination.value = 30;
    spyOn(component.desiredCardsCombination, 'emit');
    component.updateCardsCombination();
    expect(component.desiredCardsCombination.emit).toHaveBeenCalled();
  })

  it('selectCardsCombination should change the current value', () => {
    component.cardsCombination.value = 0;
    let valueCards : CalculatorComponentValue = {value: 20, cards: [20]};
    component.selectCardsCombination(valueCards);
    expect(component.cardsCombination.value).toEqual(20);
  })

  it('selectCardsCombination should change the cardsCombination value', () => {
    component.cardsCombination.value = 0;
    let valueCards : CalculatorComponentValue = {value: 20, cards: [20]};
    component.selectCardsCombination(valueCards);
    expect(component.cardsCombination.value).toEqual(20);
    expect(component.cardsCombination.cards).toEqual([20]);
  })

  it('validationAmount should change the cardsCombination value if equal', () => {
    const service = TestBed.inject(GiftService);
    const giftApi : CardsCombinationsResult = {equal: {value: 20, cards: [20]}, floor: {value: 20, cards: [20]}, ceil: {value: 20, cards: [20]}};
    const spy = spyOn(service, 'searchCombinations').and.returnValue(of(giftApi));
    component.validationAmount();
    expect(spy).toHaveBeenCalled();
    expect(component.cardsCombination.value).toEqual(20);
    expect(component.cardsCombination.cards).toEqual([20]);
  })

  it('validationAmount should change the cardsCombination value if ceil but no equal & floor', () => {
    const service = TestBed.inject(GiftService);
    const giftApi : CardsCombinationsResult = {equal: undefined, floor: undefined, ceil: {value: 40, cards: [20,20]}};
    const spy = spyOn(service, 'searchCombinations').and.returnValue(of(giftApi));
    component.validationAmount();
    expect(spy).toHaveBeenCalled();
    expect(component.cardsCombination.value).toEqual(40);
    expect(component.cardsCombination.cards).toEqual([20,20]);
  })

  it('validationAmount should change the cardsCombination value if floor but no equal & ceil', () => {
    const service = TestBed.inject(GiftService);
    const giftApi : CardsCombinationsResult = {equal: undefined, floor: {value: 80, cards: [50,30]}, ceil: undefined};
    const spy = spyOn(service, 'searchCombinations').and.returnValue(of(giftApi));
    component.validationAmount();
    expect(spy).toHaveBeenCalled();
    expect(component.cardsCombination.value).toEqual(80);
    expect(component.cardsCombination.cards).toEqual([50,30]);
  })
});
