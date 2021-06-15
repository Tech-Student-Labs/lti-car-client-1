import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
//import ApiResponse from '../shared/ApiResponse';
import { Observable, of } from 'rxjs';
import { VehicleResponse } from '../models/vehicle-response';
import { SubmittedVehicles } from '../models/submitted-vehicles';

@Injectable({
  providedIn: 'root'
})
export class SubmittedVehiclesService {

  // Endpoint to the API URL
  private endpoint: string = 'http://localhost:5000/VehicleSubmissions';
  public status: any;
  public userId: string = "";

  constructor(private http: HttpClient) { 
      //initialize userId given the user token
  }

  getByUserId() : Observable<SubmittedVehicles[]> {
    return this.http.get<SubmittedVehicles[]>(this.endpoint + "/" + this.userId)
    .pipe(
      tap(
        success => {this.status = success},
        err => {this.status = err}
      ),
      catchError(data => of(data))
    );
}
}