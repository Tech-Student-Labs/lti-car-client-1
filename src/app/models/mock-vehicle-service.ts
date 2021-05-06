import { StoreVehiclesService } from "../services/store-vehicles.service";
import CARS from '../../assets/vehicle.json';
import { Observable, of } from "rxjs";

export class MockVehicleService {
  getAll(): Observable<any>{
    return of(CARS);
  }
}
