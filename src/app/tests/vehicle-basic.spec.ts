/* tslint:disable:no-unused-variable */

import { VehicleBasic } from "../models/vehicle-basic";

describe('Service: GetAllVehicleMakes', () => {
  let vehicle: VehicleBasic;

  beforeEach(() => {
    vehicle = new VehicleBasic('model', 'year', 'vin');
  });

  it('should create userLogin', () => {
    expect(vehicle).toBeTruthy();
  });
});
