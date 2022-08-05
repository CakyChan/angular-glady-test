import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiredAmount2Component } from './desired-amount2.component';

describe('DesiredAmount2Component', () => {
  let component: DesiredAmount2Component;
  let fixture: ComponentFixture<DesiredAmount2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesiredAmount2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesiredAmount2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
