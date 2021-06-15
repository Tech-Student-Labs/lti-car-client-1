import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  api: string = "http://localhost:5000/signup";
  // status: any;

  constructor(private http: HttpClient) { }

  SignupUser(email: string, username: string, password: string, firstName: string, lastName: string): Observable<string> {
    return this.http.post<string>(this.api, {email: email, username: username, password: password, firstName: firstName, lastName: lastName});
  }
}
