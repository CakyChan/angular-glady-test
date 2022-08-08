import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GiftApi } from 'src/app/interfaces/GiftApi';
import { GiftService } from 'src/app/services/gift.service';

import { DesiredAmountComponent } from './desired-amount.component';

describe('DesiredAmountComponent', () => {
  let component: DesiredAmountComponent;
  let fixture: ComponentFixture<DesiredAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
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

  it('updateAmount should be emit', () => {
    component.amount = 30;
    spyOn(component.desiredAmount, 'emit');
    component.updateAmount();
    expect(component.desiredAmount.emit).toHaveBeenCalled();
  })

  it('nextAmount should change the amount', () => {
    const service = TestBed.inject(GiftService);
    const giftApi : GiftApi = {equal: null, floor: null, ceil: {value: 60, cards: [30,30]}};
    const spy = spyOn(service, 'searchCombinaison').and.returnValue(of(giftApi));
    component.nextAmount();
    expect(spy).toHaveBeenCalled();
    expect(component.amount).toEqual(60);
  })

  it('previousAmount should change the amount', () => {
    const service = TestBed.inject(GiftService);
    const giftApi : GiftApi = {equal: null, floor: {value: 55, cards: [30,25]}, ceil: null};
    const spy = spyOn(service, 'searchCombinaison').and.returnValue(of(giftApi));
    component.previousAmount();
    expect(spy).toHaveBeenCalled();
    expect(component.amount).toEqual(55);
  })

});
