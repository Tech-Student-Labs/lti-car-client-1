/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignupComponent } from '../components/signup/signup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { MockSignupService } from '../models/mock-signup-service';

describe('Signup Component', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [HttpClientTestingModule],
      // providers: [{provide: SignupService, useClass: MockSignupService}]
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
    component.SignupUser('', '', '', '', '');
    expect(component.message).toEqual('');
  });
});