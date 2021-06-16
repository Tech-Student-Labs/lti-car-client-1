import { StoreVehiclesService } from "../services/store-vehicles.service";
import CARS from '../../assets/vehicle.json';
import { Observable, of } from "rxjs";
import { VehicleResponse } from "./vehicle-response";
import { Injectable } from "@angular/core";
import { SubmittedVehiclesService } from "../services/submitted-vehicles.service";
import { SubmittedVehicles } from "./submitted-vehicles";

export class MockSubmittedVehicleService extends SubmittedVehiclesService {
  getByUserId(): Observable<any>{
    return of(CARS);
  }
}
