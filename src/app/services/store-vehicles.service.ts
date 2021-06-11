import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import ApiResponse from '../shared/ApiResponse';
import { Observable, of } from 'rxjs';
import { VehicleBasic } from '../models/vehicle-basic';
import { VehicleResponse } from '../models/vehicle-response';

@Injectable({
  providedIn: 'root'
})
export class StoreVehiclesService {

  // Endpoint to the API URL
  private endpoint: string = 'http://localhost:5000/vehicle';
  public status: any;

  constructor(private http: HttpClient) { }

  /*****************************************
  * Method Name: getAll()                  *
  * Parameters: NONE                       *
  * Return: Observable of type ApiResponse *
  * -------------------------------------- *
  * Description: This method will get      *
  * information from the endpoint and      *
  * return the data as an observable       *
  *****************************************/
  getAll() : Observable<ApiResponse> {
      // get<ApiReponse>(endpoint)
      return this.http.get<ApiResponse>(this.endpoint)
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
  * Parameters: *FILL IN UPON DEFINITION*  *
  * Return: NONE                           *
  * -------------------------------------- *
  * Description:                           *
  *****************************************/
  addVehicle() : void {
    //TODO update when endpoint is configured
  }
}

