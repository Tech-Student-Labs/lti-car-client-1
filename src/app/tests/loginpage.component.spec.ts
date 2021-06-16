/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginpageComponent } from '../components/loginpage/loginpage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
// import { MockSignupService } from '../models/mock-signup-service';

describe('Loginpage Component', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;

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
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stub LoginUser method in component', () => {
    component.LoginUser();
    expect(component.message).toEqual('');
  });

  describe('when service returns an error ', () => {
    let app;
    const testError = {
        status: 406,
        error: {
            message: 'Test 406 error'
        }
    };

    beforeEach(async(() => {
      const fixture = TestBed.createComponent(LoginpageComponent);
      app = fixture.componentInstance;
      spyOn(LoginService, 'LoginUser').and.returnValue(Observable.throw(testError));
  }));
  })
  it('should set the token when LoginUser is called', () => {
    // component.loginGroup.value.email = "kevinhuynh@yahoo.com";
    // component.loginGroup.value.password = "password";
    // component.LoginUser();
    // expect(component.message).toEqual("Login Successful");

    //expect(()=> {component.LoginUser();}).toThrowError()
  });

});
