/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignupComponent } from '../components/signup/signup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SignupService } from '../services/signup.service';
import { of } from 'rxjs';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule, routes } from '../app-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
// import { MockSignupService } from '../models/mock-signup-service';

describe('Signup Component', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent, NavbarComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stub SignupUser method in component', () => {
    component.SignupUser();
    expect(component.message).toEqual('');
  });

  it('should set the token when LoginUser is called', () => {
    const xService = fixture.debugElement.injector.get(SignupService);
    var mockCall = spyOn(xService,'SignupUser').and.returnValue(of("Signup Successful"));
    component.SignupUser();
    expect(component.message).toBe("Signup Successful");
    expect(mockCall).toHaveBeenCalled();
  });
});