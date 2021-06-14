import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserLogin } from '../models/user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http: HttpClient) { }
  api: string = "localhost:5000/login";
  status: any;

  Login(user: UserLogin) : Observable<UserLogin> {
    return this.http.post<UserLogin>(this.api, user)
      .pipe(
        tap(
          success => {this.status = success},
          fail => {this.status = fail}
        )
      );
  }
}
