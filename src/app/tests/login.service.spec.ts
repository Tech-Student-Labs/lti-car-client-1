import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreVehiclesService } from '../services/store-vehicles.service';
import { Observable, of, throwError } from 'rxjs';
//import ApiResponse from '../shared/ApiResponse';
import { tap } from 'rxjs/operators';
import { VehicleResponse } from '../models/vehicle-response';
import { Vehicle } from '../models/vehicle';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserLogin } from '../models/user-login';

describe('Service: Signup', () => {
  let service: LoginService;
  let httpServiceSpy: {post: jasmine.Spy};

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new LoginService(httpServiceSpy as any);
  });

  it('should cfreate', () => {
    expect(service).toBeTruthy();
  });

  it('should stub signup endpoint', () => {
    let user: UserLogin = new UserLogin('username', 'password');
    httpServiceSpy.post.and.returnValue(of(user));
    expect(service.Login(user)).toBeDefined();
    service.Login(user).subscribe(data => {
      expect(data).toEqual(user);
    });
  });

  it('SignupUser should throw error when passed bad data', () => {
    httpServiceSpy.post.and.returnValue(throwError("bad data"));
    service.Login(new UserLogin('username', 'password')).subscribe()
    expect(service.status).toEqual("bad data");
  });
});
