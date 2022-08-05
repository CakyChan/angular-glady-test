import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationAmountComponent } from './validation-amount.component';

describe('ValidationAmountComponent', () => {
  let component: ValidationAmountComponent;
  let fixture: ComponentFixture<ValidationAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});
