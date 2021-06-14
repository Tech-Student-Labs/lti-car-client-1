import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import LOGIN from '../../assets/login.json';
import { LoginService } from "../services/login.service";
import { UserLogin } from "./user-login";

@Injectable({
    providedIn: 'root'
  })
export class MockLoginService extends LoginService {
    Login(user: UserLogin): Observable<any> {
        return of(LOGIN);
    }
}
