import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
//import ApiResponse from '../shared/ApiResponse';
import { Observable, of } from 'rxjs';
import { VehicleBasic } from '../models/vehicle-basic';
import { VehicleResponse } from '../models/vehicle-response';

@Injectable({
  providedIn: 'root'
})
export class StoreVehiclesService {

  // Endpoint to the API URL
  private endpoint: string = 'http://localhost:5000/vehiclelisting';
  public status: any;

  constructor(private http: HttpClient) { }

  /*****************************************
  * Method Name: getAll()                  *
  * Parameters: NONE                       *
  * Return: Observable of type             *
  * VehicleResponse                        *
  * -------------------------------------- *
  * Description: This method will get      *
  * information from the endpoint and      *
  * return the data as an observable       *
  *****************************************/
  getAll() : Observable<VehicleResponse[]> {
      return this.http.get<VehicleResponse[]>(this.endpoint)
      .pipe(
        tap(
          success => {this.status = success},
          err => {this.status = err}
        ),
        catchError(data => of(data))
      );
  }

  /*****************************************
  * Method Name: addVehicle()              *
  * Parameters: an object of type          *
  * VehicleResponse                        *
  * Return: Observable of type             *
  * VehicleResponse                        *
  * -------------------------------------- *
  * Description: This method will add      *
  * information from the endpoint and      *
  * return the data as an observalbe       *
  *****************************************/
  addVehicle(vehicle: VehicleResponse) : Observable<VehicleResponse> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(vehicle);
    return this.http.post<VehicleResponse>(this.endpoint, body, {'headers': headers})
      .pipe(
        tap(
          success => {this.status = success},
          err => {this.status = err}
        ),
        catchError(data => of(data))
      );
  }

  /*****************************************
  * Method Name: updateVehicle()           *
  * Parameters: an object of type          *
  * VehicleResponse                        *
  * Return: Observable of type             *
  * VehicleResponse                        *
  * -------------------------------------- *
  * Description: This method will update   *
  * information from the endpoint and      *
  * return the data as an observalbe       *
  *****************************************/
  updateVehicle(vehicle: VehicleResponse) : Observable<VehicleResponse> {
    return this.http.put<VehicleResponse>(this.endpoint, vehicle)
      .pipe(
        tap(
          success => {this.status = success},
          err => {this.status = err}
        ),
        catchError(data => of(data))
      );
  }

  /*****************************************
  * Method Name: deleteVehicle()           *
  * Parameters: a number representing id   *
  * value for a vehicle inside the         *
  * database                               *
  * Return: Observable of type             *
  * VehicleResponse                        *
  * -------------------------------------- *
  * Description: This method will remove   *
  * information from the endpoint and      *
  * return the data as an observalbe       *
  *****************************************/
  deleteVehicle(id: number) : Observable<VehicleResponse> {
    return this.http.delete<VehicleResponse>(`${this.endpoint}/${id}`)
      .pipe(
        tap(
          success => {this.status = success},
          err => {this.status = err}
        ),
        catchError(data => of(data))
      );
  }
}