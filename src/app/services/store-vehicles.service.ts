import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { VehicleBasic } from '../models/vehicle-basic';
import { VehicleResponse } from '../models/vehicle-response';
import { VehicleListing } from '../models/vehicle-listing';
import { MessageDTO } from '../models/MessageDTO';

@Injectable({
  providedIn: 'root'
})
export class StoreVehiclesService {

  // Endpoint to the API URL
  private endpoint: string = 'http://localhost:5000/vehiclelisting';
  public status: any;

  constructor(private http: HttpClient) { }

  getAll() : Observable<VehicleListing[]> {
      return this.http.get<VehicleListing[]>(this.endpoint)
      .pipe(
        tap(
          success => {this.status = success},
          err => {this.status = err}
        ),
        catchError(data => of(data))
      );
  }

  addVehicle(vehicle: VehicleListing) : Observable<MessageDTO> {
    var token = localStorage.getItem('token');
    const headers = { 'content-type': 'application/json', Authorization: 'Bearer ' + token};


    const body = JSON.stringify(vehicle);
    return this.http.post<MessageDTO>(this.endpoint, body, {'headers': headers})
      .pipe(
        tap(
          success => {this.status = success},
          err => {this.status = err}
        ),
        catchError(data => of(data))
      );
  }

  updateVehicle(vehicle: VehicleListing) : Observable<VehicleListing> {
    return this.http.put<VehicleListing>(this.endpoint, vehicle)
      .pipe(
        tap(
          success => {this.status = success},
          err => {this.status = err}
        ),
        catchError(data => of(data))
      );
  }

  deleteVehicle(id: number) : Observable<VehicleListing> {
    return this.http.delete<VehicleListing>(`${this.endpoint}/${id}`)
      .pipe(
        tap(
          success => {this.status = success},
          err => {this.status = err}
        ),
        catchError(data => of(data))
      );
  }
}