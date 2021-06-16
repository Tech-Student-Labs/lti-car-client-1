import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { token } from '../models/TokenDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:5000/User/Login";
  status: any;
  

  LoginUser(email: string, password: string): Observable<token>
  {
    return this.http.post<token>(this.api, {email: email, password: password});
  }
  getToken():  string | null 
  {
    return  localStorage.getItem('token');
  }
}
