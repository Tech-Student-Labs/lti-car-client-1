import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userLoggedIn: boolean = false;
  public userIsAdmin: boolean = false;
  myUserState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  myAdminState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor() {
    this.updateUserStatus();
    this.myUserState$.next(this.userLoggedIn);
    this.myUserState$.next(this.userIsAdmin);
  }

  updateUserStatus() : void {
    var token = localStorage.getItem('token');
    if (token != null){
      this.userLoggedIn = true;
      let tokenInfo = this.getDecodedAccessToken(token); // decode token
      if (tokenInfo.role == "AdminUser") {
        this.userIsAdmin = true;
      }
      else {
        this.userIsAdmin = false;
      }
    }
    else {
      this.userLoggedIn = false;
      this.userIsAdmin = false;
    }
    console.log(this.userLoggedIn);
    this.myUserState$.next(this.userLoggedIn);
    this.myAdminState$.next(this.userIsAdmin);
  }

  getUserStatus() : Observable<boolean> {
    return this.myUserState$;
  }

  getAdminStatus() : Observable<boolean> {
    return this.myAdminState$;
  }

  private getDecodedAccessToken(token: any): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
    }
  }
}
