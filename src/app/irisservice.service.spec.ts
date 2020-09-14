import { TestBed } from '@angular/core/testing';

import { IrisserviceService } from './irisservice.service';

describe('IrisserviceService', () => {
  let service: IrisserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrisserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
