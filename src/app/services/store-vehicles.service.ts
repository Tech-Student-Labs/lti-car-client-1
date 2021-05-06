import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import ApiResponse from '../shared/ApiResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreVehiclesService {

  // Endpoint to the API URL
  private endpoint: string = 'our .net/c# database endpoint';
  private status: any;

  constructor(private http: HttpClient) { }

  /*****************************************
  * Method Name: getAll()                  *
  * Parameters: NONE                       *
  * Return: Observable of type ApiResponse *
  *****************************************/
  getAll() : Observable<ApiResponse> {
      // get<ApiReponse>(endpoint)
      return this.http.get<ApiResponse>(this.endpoint)
      .pipe(
        tap(
          success => {this.status = success},
          err => {this.status = err}
        )
      );
  }
}

