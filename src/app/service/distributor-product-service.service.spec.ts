import { TestBed } from '@angular/core/testing';

import { DistributorProductServiceService } from './distributor-product-service.service';

describe('DistributorProductServiceService', () => {
  let service: DistributorProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistributorProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
