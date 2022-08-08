import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiredAmountComponent } from './desired-amount.component';

describe('DesiredAmountComponent', () => {
  let component: DesiredAmountComponent;
  let fixture: ComponentFixture<DesiredAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesiredAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesiredAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
