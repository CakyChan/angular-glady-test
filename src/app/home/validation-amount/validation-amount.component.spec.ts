import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CardsCombinationsResult } from 'src/app/interfaces/CardsCombinationsResult';
import { CardsCombination } from 'src/app/interfaces/CardsCombination';
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

  it('updateAmount should be emit', () => {
    component.amount = 30;
    spyOn(component.desiredAmount, 'emit');
    component.updateAmount();
    expect(component.desiredAmount.emit).toHaveBeenCalled();
  })

  it('selectAmount should change the current amount', () => {
    component.amount = 0;
    let valueCards : CardsCombination = {value: 20, cards: [20]};
    component.selectCardsCombination(valueCards);
    expect(component.amount).toEqual(20);
  })

  it('selectAmount should change the activeValueCards value', () => {
    component.amount = 0;
    let valueCards : CardsCombination = {value: 20, cards: [20]};
    component.selectCardsCombination(valueCards);
    expect(component.activeValueCards?.value).toEqual(20);
    expect(component.activeValueCards?.cards).toEqual([20]);
  })

  it('validationAmount should change the activeValueCards value if equal', () => {
    const service = TestBed.inject(GiftService);
    const giftApi : CardsCombinationsResult = {equal: {value: 20, cards: [20]}, floor: {value: 20, cards: [20]}, ceil: {value: 20, cards: [20]}};
    const spy = spyOn(service, 'searchCombinations').and.returnValue(of(giftApi));
    component.validationAmount();
    expect(spy).toHaveBeenCalled();
    expect(component.activeValueCards?.value).toEqual(20);
    expect(component.activeValueCards?.cards).toEqual([20]);
  })

  it('validationAmount should change the activeValueCards value if ceil but no equal & floor', () => {
    const service = TestBed.inject(GiftService);
    const giftApi : CardsCombinationsResult = {equal: undefined, floor: undefined, ceil : {value: 40, cards: [20,20]}};
    const spy = spyOn(service, 'searchCombinations').and.returnValue(of(giftApi));
    component.validationAmount();
    expect(spy).toHaveBeenCalled();
    expect(component.activeValueCards?.value).toEqual(40);
    expect(component.activeValueCards?.cards).toEqual([20,20]);
  })

  it('validationAmount should change the activeValueCards value if floor but no equal & ceil', () => {
    const service = TestBed.inject(GiftService);
    const giftApi : CardsCombinationsResult = {equal: undefined, floor: {value: 80, cards: [50,30]}, ceil : undefined};
    const spy = spyOn(service, 'searchCombinations').and.returnValue(of(giftApi));
    component.validationAmount();
    expect(spy).toHaveBeenCalled();
    expect(component.activeValueCards?.value).toEqual(80);
    expect(component.activeValueCards?.cards).toEqual([50,30]);
  })
});
