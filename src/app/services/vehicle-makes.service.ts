import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
//import ApiResponse from '../shared/ApiResponse';
import { Observable, of } from 'rxjs';
// import { VehicleMakes } from '../models/vehicle-makes';

@Injectable({
  providedIn: 'root'
})
export class VehicleMakesService {

  apiMakes: string = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json";
  public status: any;

  constructor(private http: HttpClient) { }

  // getAllMakes(): Observable<object>
  // {
  //   return this.http.get(this.apiMakes)
  //     .pipe(
  //       tap(
  //         success => {this.status = success},
  //         err => {this.status = err}
  //       ),
  //       catchError(data => of(data))
  //     );
  // }
}
