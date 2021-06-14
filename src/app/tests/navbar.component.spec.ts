import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from '../components/navbar/navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        NavbarComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
});
