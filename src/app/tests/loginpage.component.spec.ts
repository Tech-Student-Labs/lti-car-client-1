/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginpageComponent } from '../components/loginpage/loginpage.component';
import { LoginService } from '../services/login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockLoginService } from '../models/mock-login-service';
import { UserLogin } from '../models/user-login';

describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;
  let service: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: LoginService, useClass: MockLoginService}]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LoginService);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stub SignupUser method in mock service', () => {
    let user: UserLogin = new UserLogin("username", "password");
    service.Login(user).subscribe(data => {
      expect(data).toEqual({username: "username", password: "password"});
    });
  });

  it('should stub SignupUser method in component', () => {
    let user: UserLogin = new UserLogin("username", "password");
    component.Login(user);
    expect(component.user).toEqual({username: "username", password: "password"});
  });
});
