import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiredAmount1Component } from './desired-amount1.component';

describe('DesiredAmount1Component', () => {
  let component: DesiredAmount1Component;
  let fixture: ComponentFixture<DesiredAmount1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesiredAmount1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesiredAmount1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
