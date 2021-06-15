import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let location: Location;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppRoutingModule
      ],
      declarations: [ 
        NavbarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login button', () => {
    expect(fixture.nativeElement.querySelector('#login')).toBeTruthy();
  });
  
  it('should have a signup button', () => {
    expect(fixture.nativeElement.querySelector('#signup')).toBeTruthy();
  });
  
  it('should have a logout button', () => {
    expect(fixture.nativeElement.querySelector('#logout')).toBeTruthy();
  });

  it('should navigate to home page', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('');
  }));

  it('should navigate to history', fakeAsync(() => {
    router.navigate(['history']);
    tick();
    expect(location.path()).toBe('/history');
  }));

  it('should navigate to login', fakeAsync(() => {
    router.navigate(['login']);
    tick();
    expect(location.path()).toBe('/login');
  }));

  it('should navigate to signup', fakeAsync(() => {
    router.navigate(['signup']);
    tick();
    expect(location.path()).toBe('/signup');
  }));

  it('should navigate to vehiclelist', fakeAsync(() => {
    router.navigate(['vehiclelist']);
    tick();
    expect(location.path()).toBe('/vehiclelist');
  }));

  it('should navigate to submitvehicle', fakeAsync(() => {
    router.navigate(['submitvehicle']);
    tick();
    expect(location.path()).toBe('/submitvehicle');
  }));
});
