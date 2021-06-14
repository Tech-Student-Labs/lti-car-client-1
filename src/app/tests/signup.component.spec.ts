/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignupComponent } from '../components/signup/signup.component';
import { UserSignup } from '../models/user-signup';
import { SignupService } from '../services/signup.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockSignupService } from '../models/mock-signup-service';

describe('VehicleListComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let service: SignupService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: SignupService, useClass: MockSignupService}]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SignupService);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stub SignupUser method in mock service', () => {
    let user: UserSignup = new UserSignup("email", "username", "password", "fname", "lname");
    service.SignupUser(user).subscribe(data => {
      expect(data).toEqual({email: "email", username: "username", password: "password", firstName: "fname", lastName: "lname"});
    });
  });

  it('should stub SignupUser method in component', () => {
    let user: UserSignup = new UserSignup("email", "username", "password", "fname", "lname");
    component.SignupUser(user);
    expect(component.user).toEqual({email: "email", username: "username", password: "password", firstName: "fname", lastName: "lname"});
  });
});