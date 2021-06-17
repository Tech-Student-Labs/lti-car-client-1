import { StoreVehiclesService } from "../services/store-vehicles.service";
import CARS from '../../assets/vehicle.json';
import { Observable, of } from "rxjs";
import { VehicleResponse } from "./vehicle-response";
import { Injectable } from "@angular/core";

export class MockVehicleService extends StoreVehiclesService {
  getAll(): Observable<any>{
    return of(CARS);
  }
}
