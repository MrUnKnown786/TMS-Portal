import { TestBed } from '@angular/core/testing';

import { SevaService } from './seva.service';

describe('SevaService', () => {
  let service: SevaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
