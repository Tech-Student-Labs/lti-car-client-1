import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
//import ApiResponse from '../shared/ApiResponse';
import { Observable, of } from 'rxjs';
import { VehicleResponse } from '../models/vehicle-response';
import { SubmittedVehicles } from '../models/submitted-vehicles';
import jwt_decode from 'jwt-decode';
import { LoginService } from './login.service';

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

  AddVehicleSubmission(submission: SubmittedVehicles): Observable<string>
  {
    var token = localStorage.getItem('token');

    var tokenHeader = new HttpHeaders({ Authorization: 'Bearer ' + token });
    let tokenInfo = this.getDecodedAccessToken(token); // decode token
    submission.userId = tokenInfo.UserID;
    return this.http
      .post<string>(this.endpoint, 
        submission, {
        headers: tokenHeader,
      })
      .pipe(
        tap(
          (success: any) => {
            this.status = success;
          },
          (err: any) => {
            this.status = err;
          }
        ),
        catchError((data) => of(data))
      );
  }
}

// 'deleteUserRole(){   var userNamess = this.formDeleteRole.value.userName;   var oldRoless = this.formDeleteRole.value.oldRole;   var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+ localStorage.getItem('token')})   console.log(this.BaseURI+'/Profile/deleteRole',{params: {userName: userNamess,oldRole:oldRoless},headers:tokenHeader}); // http://localhost:53289/api/Profile/deleteRole?userName=hahaha&oldRole=EnGG_Admin return this.http.get(this.BaseURI+'/Profile/deleteRole',{params: {userName: userNamess,oldRole:oldRoless},headers:tokenHeader}); }
