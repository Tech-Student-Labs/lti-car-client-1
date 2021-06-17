import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userLoggedIn: boolean = false;
  myUserState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.updateUserStatus();
    this.myUserState$.next(this.userLoggedIn);
  }

  updateUserStatus() {
    var token = localStorage.getItem('token');
    if (token != null){
      this.userLoggedIn = true;
    }
    else {
      this.userLoggedIn = false;
    }
    console.log(this.userLoggedIn);
    this.myUserState$.next(this.userLoggedIn);
  }

  getUserStatus() : Observable<boolean> {
    return this.myUserState$;
  }
}
