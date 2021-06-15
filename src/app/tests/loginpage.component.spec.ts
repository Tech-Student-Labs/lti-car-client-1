/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginpageComponent } from '../components/loginpage/loginpage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { MockSignupService } from '../models/mock-signup-service';

describe('Login Component', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageComponent ],
      imports: [HttpClientTestingModule],
      // providers: [{provide: SignupService, useClass: MockSignupService}]
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
    component.LoginUser('', '');
    expect(component.message).toEqual('');
  });
});
