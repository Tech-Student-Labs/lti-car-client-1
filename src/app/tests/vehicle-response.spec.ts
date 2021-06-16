/* tslint:disable:no-unused-variable */

import { VehicleResponse } from "../models/vehicle-response";

describe('Service: GetAllVehicleMakes', () => {
  let vehicle: VehicleResponse;

  beforeEach(() => {
    vehicle = new VehicleResponse(1, 'make', 'model', 1994, 'vin', 25000);
  });

  it('should create userLogin', () => {
    expect(vehicle).toBeTruthy();
  });
});
