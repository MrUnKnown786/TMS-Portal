import { TestBed } from '@angular/core/testing';

import { DarshanService } from './darshan.service';

describe('DarshanService', () => {
  let service: DarshanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarshanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
