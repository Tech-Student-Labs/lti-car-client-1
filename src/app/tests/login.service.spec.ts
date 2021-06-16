// import { inject, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { Observable, of, throwError } from 'rxjs';
// //import ApiResponse from '../shared/ApiResponse';
// import { tap } from 'rxjs/operators';
// import { LoginService } from '../services/login.service';

// describe('Service: Login', () => {
//   let service: LoginService;
//   let httpServiceSpy: {post: jasmine.Spy};

//   beforeEach(async() => {
//     await TestBed.configureTestingModule({
//       imports: [
//         HttpClientTestingModule
//       ]
//     });
//     httpServiceSpy = jasmine.createSpyObj('HttpClient', ['post']);
//     service = new LoginService(httpServiceSpy as any);
//   });

//   it('should create', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should stub LoginUser', () => {
//     httpServiceSpy.post.and.returnValue(of('Signed in user successfully'));
//     expect(service.LoginUser('', '')).toBeTruthy();
//     service.LoginUser('', '').subscribe(data => {
//       expect(data).toEqual('Signed in user successfully');
//     });
//   });
// });

import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from '../services/login.service';
import { UserLogin } from '../models/user-login';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
  });

  it('should be initialized', inject([LoginService], (loginService: LoginService) => {
    expect(loginService).toBeTruthy();
  }));

  it(
    'should perform login correctly',
    fakeAsync(
      inject(
        [LoginService, HttpTestingController],
        (loginService: LoginService, backend: HttpTestingController) => 
        {
          const url = "http://localhost:5000/user/login";
          const responseObject = {
            success: true,
            message: "login successful"
          };
          const loginUser: UserLogin = new UserLogin('username', 'password');
          let response: any = null;

          loginService.LoginUser(loginUser.username, loginUser.password).subscribe(
            (receivedResponse: any) => {
              response = receivedResponse;
            },
            (error: any) => {}
          );

          const requestWrapper = backend.expectOne({url: "http://localhost:5000/user/login"});
          requestWrapper.flush(responseObject);

          tick();

          expect(requestWrapper.request.method).toEqual('POST');
          expect(response).toBeTruthy();
          // expect(response.body).toEqual(responseObject);
          // expect(response.status).toBe(200);
        })
    )
  )

  // it(
  //   'should fail login correctly',
  //   fakeAsync(
  //     inject(
  //       [LoginService, HttpTestingController],
  //       (loginService: LoginService, backend: HttpTestingController) => 
  //       {
  //         const url = "http://localhost:5000/login";
  //         const responseObject = {
  //           success: false,
  //           message: "login failed"
  //         };
  //         const loginUser: UserLogin = new UserLogin('username', 'wrongpassword');
  //         let response = null;

  //         loginService.LoginUser(loginUser.username, loginUser.password).subscribe(
  //           (receivedResponse: any) => {
  //             response = receivedResponse;
  //           },
  //           (error: any) => {}
  //         );

  //         const requestWrapper = backend.expectOne({url: "http://localhost:5000/login"});
  //         requestWrapper.flush(responseObject);

  //         tick();

  //         expect(requestWrapper.request.method).toEqual('POST');
  //         expect(response.body).toEqual(responseObject);
  //         expect(response.status).toBe(200);
  //       })
  //   )
  // )
});