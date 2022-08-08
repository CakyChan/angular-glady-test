import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValueCards } from 'src/app/interfaces/ValueCards';

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

  it('selectAmount should change the current amount', () => {
    component.amount = 0;
    let valueCards : ValueCards = {value: 20, cards: [20]};
    component.selectAmount(valueCards);
    expect(component.amount).toEqual(20);
  })

  it('selectAmount should change the activeValueCards value', () => {
    component.amount = 0;
    let valueCards : ValueCards = {value: 20, cards: [20]};
    component.selectAmount(valueCards);
    expect(component.activeValueCards?.value).toEqual(20);
  })

  it('selectAmount should change the activeValueCards cards', () => {
    component.amount = 0;
    let valueCards : ValueCards = {value: 20, cards: [20]};
    component.selectAmount(valueCards);
    expect(component.activeValueCards?.cards).toEqual([20]);
  })
});
