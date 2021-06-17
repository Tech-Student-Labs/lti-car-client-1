/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginpageComponent } from '../components/loginpage/loginpage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { of, throwError } from 'rxjs';
import { token } from '../models/TokenDTO';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { UserService } from '../services/user.service';


describe('Loginpage Component', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;
  let tokenStr: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI5ODcyODQ5YS02ODAyLTRlYmQtODNkNi05YzJmYmJmOWI4NzciLCJyb2xlIjoiUmVndWxhclVzZXIiLCJuYmYiOjE2MjM5NDU3MzIsImV4cCI6MTYzMjU4NTczMiwiaWF0IjoxNjIzOTQ1NzMyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAifQ.At-mrIJOlsfvZMzpbJ0XqwGNIQiv3eg4rTAtUE8jpnw";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
      providers: [
        FormBuilder,
        LoginService,
        UserService
      ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    localStorage.setItem('token',tokenStr);
    fixture = TestBed.createComponent(LoginpageComponent);
    let service = TestBed.inject(LoginService);
    let service2 = TestBed.inject(UserService);
    component = fixture.componentInstance;
    service2.updateUserStatus();
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

  it('should set the token when LoginUser is called', async() => {
    const xService = fixture.debugElement.injector.get(LoginService);
    const mockCall = spyOn(xService,'LoginUser').and.returnValue(of(new token(tokenStr)));
    component.LoginUser();
    expect(component.message).toBe("Login Successful");
    expect(mockCall).toHaveBeenCalled();
  });
});
