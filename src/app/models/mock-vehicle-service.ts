import { StoreVehiclesService } from "../services/store-vehicles.service";
import CARS from '../../assets/vehicle.json';
import { Observable, of } from "rxjs";
import { VehicleResponse } from "./vehicle-response";

export class MockVehicleService extends StoreVehiclesService {
  getAll(): Observable<any>{
    return of(CARS);
  }
  // addVehicle(vehicle: VehicleResponse): Observable<any>{
  //   return of(CARS);
  // }
  // updateVehicle(vehicle: VehicleResponse): Observable<any>{
  //   return of(CARS);
  // }
  // deleteVehicle(id: number): Observable<any>{
  //   return of(CARS);
  // }
}
