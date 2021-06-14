import { Observable, of } from "rxjs";
import LOGIN from '../../assets/login.json';
import { LoginService } from "../services/login.service";
import { UserLogin } from "./user-login";

export class MockLoginService extends LoginService {
    Login(user: UserLogin): Observable<any> {
        return of(LOGIN);
    }
}
