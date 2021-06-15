import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:5000/User/Login";
  status: any;

  LoginUser(email: string, password: string): Observable<string>
  {
    return this.http.post<string>(this.api, {email: email, password: password});
  }
}
