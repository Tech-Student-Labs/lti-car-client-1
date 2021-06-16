/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginpageComponent } from '../components/loginpage/loginpage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { of, throwError } from 'rxjs'; // make sure to import the throwError from rxjs
import { token } from '../models/TokenDTO';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';


// import { MockSignupService } from '../models/mock-signup-service';

describe('Loginpage Component', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;
    

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageComponent, NavbarComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
      providers: [
        FormBuilder,
        LoginService
      ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(LoginpageComponent);
    let service = TestBed.inject(LoginService);
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

  it('should render buttons', () => {
    var login = fixture.nativeElement.querySelector('#login');
    var signup = fixture.nativeElement.querySelector('#signup');
    var logout = fixture.nativeElement.querySelector('#logout');
    expect(login).toBeDefined();
    expect(signup).toBeDefined();
    expect(logout).toBeDefined();
  })

});
