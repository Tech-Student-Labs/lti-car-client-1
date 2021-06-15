import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
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
  public userId: string = "0c220167-7a73-4b6a-a938-3f61ad04e76a";

  constructor(private http: HttpClient) { 
      //initialize userId given the user token
  }

  getByUserId() : Observable<SubmittedVehicles[]> {
    //todo get token from local storage
    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI5YjNiZGI4Ny1kZTQ3LTQxOGQtODg3ZS0zMzVkYTUzNTBmMWUiLCJyb2xlIjoiQWRtaW5Vc2VyIiwibmJmIjoxNjIzNzEwNDUzLCJleHAiOjE2MzIzNTA0NTMsImlhdCI6MTYyMzcxMDQ1MywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIn0.g11nmSnglviiN2H_zW5hOaNOnnMqwOVm_soOUcshlkM";
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+ token});
    return this.http.get<SubmittedVehicles[]>(this.endpoint + "/" + this.userId, {headers: tokenHeader})
    .pipe(
      tap(
        success => {this.status = success},
        err => {this.status = err}
      ),
      catchError(data => of(data))
    );
}
}

// 'deleteUserRole(){   var userNamess = this.formDeleteRole.value.userName;   var oldRoless = this.formDeleteRole.value.oldRole;   var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+ localStorage.getItem('token')})   console.log(this.BaseURI+'/Profile/deleteRole',{params: {userName: userNamess,oldRole:oldRoless},headers:tokenHeader}); // http://localhost:53289/api/Profile/deleteRole?userName=hahaha&oldRole=EnGG_Admin return this.http.get(this.BaseURI+'/Profile/deleteRole',{params: {userName: userNamess,oldRole:oldRoless},headers:tokenHeader}); }