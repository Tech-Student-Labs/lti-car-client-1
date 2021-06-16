import { TestBed } from '@angular/core/testing';

import { UserService } from '../services/user.service';

describe('UserServiceService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be false when there is no token', () => {
    service.updateUserStatus();
    expect(service.userLoggedIn).toBeFalsy();
  });

  it('should be return an observable of false when there is no token', () => {
    service.updateUserStatus();
    service.getUserStatus().subscribe(data => {
      expect(data).toBeFalsy();
    });
  });

  it('should be created', () => {
    localStorage.setItem("token","asd");
    service.updateUserStatus();
    expect(service.userLoggedIn).toBeTruthy();
  });

  it('should be created', () => {
    localStorage.setItem("token","asd");
    service.updateUserStatus();
    service.getUserStatus().subscribe(data => {
      expect(data).toBeTruthy();
    });
  });
});
