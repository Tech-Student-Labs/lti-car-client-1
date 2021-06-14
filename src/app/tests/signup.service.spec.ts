import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreVehiclesService } from '../services/store-vehicles.service';
import { Observable, of, throwError } from 'rxjs';
//import ApiResponse from '../shared/ApiResponse';
import { tap } from 'rxjs/operators';
import { VehicleResponse } from '../models/vehicle-response';
import { Vehicle } from '../models/vehicle';
import { SignupService } from '../services/signup.service';
import { UserSignup } from '../models/user-signup';

describe('Service: Signup', () => {
  let service: SignupService;
  let httpServiceSpy: {post: jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new SignupService(httpServiceSpy as any)
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should stub signup endpoint', () => {
    let user: UserSignup = new UserSignup('email@noemail.com', 'username', 'password', 'bob', 'ross');
    httpServiceSpy.post.and.returnValue(of(user));
    expect(service.SignupUser(user)).toBeDefined();
    service.SignupUser(user).subscribe(data => {
      expect(data).toEqual(user);
    });
  });

  it('SignupUser should throw error when passed bad data', () => {
    httpServiceSpy.post.and.returnValue(throwError("bad data"));
    service.SignupUser(new UserSignup('email', 'username', 'password', 'bob', 'ross')).subscribe()
    expect(service.status).toEqual("bad data");
  })
});
