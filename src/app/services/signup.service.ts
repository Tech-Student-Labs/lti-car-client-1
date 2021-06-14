import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserSignup } from '../models/user-signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  api: string = "localhost:5000/signup";
  status: any;

  constructor(private http: HttpClient) { }

  SignupUser(user: UserSignup) : Observable<UserSignup> {
    return this.http.post<UserSignup>(this.api, user)
      .pipe(
        tap(
          success => {this.status = success},
          fail => {this.status = fail}
        )
      );
  }

}
