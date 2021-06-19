import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { VehicleResponse } from '../models/vehicle-response';
import { SubmittedVehicles } from '../models/submitted-vehicles';
import jwt_decode from 'jwt-decode';
import { LoginService } from './login.service';
import { MessageDTO } from '../models/MessageDTO';
import { viewClassName } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class SubmittedVehiclesService {
  // Endpoint to the API URL
  private endpoint: string = 'http://localhost:5000/VehicleSubmissions';
  public status: any;

  constructor(private http: HttpClient) {  }

  getDecodedAccessToken(token: any): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
    }
  }

  getByUserId(): Observable<SubmittedVehicles[]> {
    var token = localStorage.getItem('token');

    var tokenHeader = new HttpHeaders({ Authorization: 'Bearer ' + token });
    let tokenInfo = this.getDecodedAccessToken(token); // decode token

    return this.http
      .get<SubmittedVehicles[]>(this.endpoint + '/' + tokenInfo.UserID, {
        headers: tokenHeader,
      })
      .pipe(
        tap(
          (success) => {
            this.status = success;
          },
          (err) => {
            this.status = err;
          }
        ),
        catchError((data) => of(data))
      );
  }

  getAll(): Observable<SubmittedVehicles[]>{
    var token = localStorage.getItem('token');

    var tokenHeader = new HttpHeaders({ Authorization: 'Bearer ' + token });

    return this.http
      .get<SubmittedVehicles[]>(this.endpoint,{
        headers: tokenHeader,
      })
      .pipe(
        tap(
          (success) => {
            this.status = success;
          },
          (err) => {
            this.status = err;
          }
        ),
        catchError((data) => of(data))
      );
  }

  AddVehicleSubmission(submission: SubmittedVehicles): Observable<MessageDTO>
  {
    var token = localStorage.getItem('token');

    var tokenHeader = new HttpHeaders({ Authorization: 'Bearer ' + token });
    let tokenInfo = this.getDecodedAccessToken(token); // decode token
    submission.userId = tokenInfo.UserID;
    return this.http
      .post<MessageDTO>(this.endpoint, 
        submission, {
        headers: tokenHeader,
      });
  }

  DeleteVehicleSubmission(vin: string): Observable<MessageDTO>
  {
    return this.http.delete<MessageDTO>(`${this.endpoint}/${vin}`)
      .pipe(
        tap(
          success => {this.status = success},
          err => {this.status = err}
        ),
        catchError(data => of(data))
      );
  }
}