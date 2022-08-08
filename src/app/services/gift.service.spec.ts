import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GiftService } from './gift.service';

describe('GiftService', () => {
  let service: GiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(GiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
