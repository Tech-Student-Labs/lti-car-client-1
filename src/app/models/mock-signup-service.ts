import { Observable, of } from "rxjs";
import { UserSignup } from "./user-signup";
import USER from '../../assets/user.json';
import { SignupService } from "../services/signup.service";

export class MockSignupService extends SignupService {
    SignupUser(user: UserSignup): Observable<any> {
        return of(USER);
    }
}
