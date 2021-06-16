/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginpageComponent } from '../components/loginpage/loginpage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { of, throwError } from 'rxjs'; // make sure to import the throwError from rxjs
import { token } from '../models/TokenDTO';


// import { MockSignupService } from '../models/mock-signup-service';

describe('Loginpage Component', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;
  // let httpServiceSpy: {get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy};
    

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageComponent ],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder, LoginService]
      //providers: [{provide: SignupService, useClass: MockSignupService}]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(LoginpageComponent);
    let service = TestBed.inject(LoginService);
    component = fixture.componentInstance;
    // httpServiceSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    // service = new StoreVehiclesService(httpServiceSpy as any)
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stub LoginUser method in component', () => {
    component.LoginUser();
    expect(component.message).toEqual('');
  });

  // describe('when service returns an error ', () => {
  //   let app;
  //   const testError = {
  //       status: 406,
  //       error: {
  //           message: 'Test 406 error'
  //       }
  //   };

  //   beforeEach(async(() => {
  //     const fixture = TestBed.createComponent(LoginpageComponent);
  //     app = fixture.componentInstance;
  //     spyOn(LoginService, 'LoginUser').and.returnValue(Observable.throw(testError));
  // }));
  // })
  it('should throw error when LoginUser is called with ', () => {
    const xService = fixture.debugElement.injector.get(LoginService);
    const mockCall = spyOn(xService,'LoginUser').and.returnValue(throwError({status: 404, error: {Message: "Login Failed"}}));
    component.LoginUser();
    expect(component.message).toBe("Login Failed");
  });

  it('should set the token when LoginUser is called', () => {
    const xService = fixture.debugElement.injector.get(LoginService);
    const mockCall = spyOn(xService,'LoginUser').and.returnValue(of(new token("asdasdasd")));
    component.LoginUser();
    expect(component.message).toBe("Login Successful");
    expect(mockCall).toHaveBeenCalled();
  });

});
