import { TestBed } from '@angular/core/testing';

import { StoreVehiclesService } from '../services/store-vehicles.service';

describe('StoreVehiclesService', () => {
  let service: StoreVehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreVehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
