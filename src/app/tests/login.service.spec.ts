import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreVehiclesService } from '../services/store-vehicles.service';
import { Observable, of, throwError } from 'rxjs';
//import ApiResponse from '../shared/ApiResponse';
import { tap } from 'rxjs/operators';
import { VehicleResponse } from '../models/vehicle-response';
import { Vehicle } from '../models/vehicle';
import { LoginService } from '../services/login.service';
import { UserLogin } from '../models/user-login';

describe('Service: Login', () => {
  let service: LoginService;
  let httpServiceSpy: {post: jasmine.Spy};

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new LoginService(httpServiceSpy as any);
  });

  it('should cfreate', () => {
    expect(service).toBeTruthy();
  });

  it('should stub login endpoint', () => {
    let user: UserLogin = new UserLogin('username', 'password');
    httpServiceSpy.post.and.returnValue(of(user));
    expect(service.Login(user)).toBeDefined();
    service.Login(user).subscribe(data => {
      expect(data).toEqual(user);
    });
  });

  // THROWS RANDOM BAD DATA ERROR DOESN'T WORK!
  // it('Login should throw error when passed bad data', () => {
  //   httpServiceSpy.post.and.returnValue(throwError("bad data"));
  //   service.Login(new UserLogin('username', 'password')).subscribe()
  //   expect(service.status).toEqual("bad data");
  // });
});
