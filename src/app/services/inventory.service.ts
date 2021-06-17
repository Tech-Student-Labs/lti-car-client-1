import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
//import ApiResponse from '../shared/ApiResponse';
import { Observable, of } from 'rxjs';
import { VehicleBasic } from '../models/vehicle-basic';
import { VehicleResponse } from '../models/vehicle-response';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  // Endpoint to the API URL
  private endpoint: string = 'http://localhost:5000/vehicle';
  public status: any;

  constructor(private http: HttpClient) { }

  getAll() : Observable<VehicleResponse[]> {
    var token = localStorage.getItem('token');
    var tokenHeader = new HttpHeaders({ Authorization: 'Bearer ' + token });
      return this.http.get<VehicleResponse[]>(this.endpoint, {headers: tokenHeader})
      .pipe(
        tap(
          success => {this.status = success},
          err => {this.status = err}
        ),
        catchError(data => of(data))
      );
  }

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