import { TestBed } from '@angular/core/testing';

import { ServiceV2Service } from './service-v2.service';

describe('ServiceV2Service', () => {
  let service: ServiceV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
