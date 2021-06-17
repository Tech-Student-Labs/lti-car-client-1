import { TestBed } from '@angular/core/testing';

import { UserService } from '../services/user.service';

describe('UserServiceService', () => {
  let service: UserService;
  let token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI5ODcyODQ5YS02ODAyLTRlYmQtODNkNi05YzJmYmJmOWI4NzciLCJyb2xlIjoiUmVndWxhclVzZXIiLCJuYmYiOjE2MjM5NDU3MzIsImV4cCI6MTYzMjU4NTczMiwiaWF0IjoxNjIzOTQ1NzMyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAifQ.At-mrIJOlsfvZMzpbJ0XqwGNIQiv3eg4rTAtUE8jpnw";

  beforeEach(() => {
    localStorage.setItem('token',token);
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    service.updateUserStatus();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be false when there is no token', () => {
    localStorage.clear();
    service.updateUserStatus();
    expect(service.userLoggedIn).toBeFalsy();
  });

  it('should be return an observable of false when there is no token', () => {
    localStorage.clear();
    service.updateUserStatus();
    service.getUserStatus().subscribe(data => {
      expect(data).toBeFalsy();
    });
  });

  it('should be true when there is a token', () => {
    service.updateUserStatus();
    expect(service.userLoggedIn).toBeTruthy();
  });

  it('should be return an observable of true when there is a token', () => {
    service.updateUserStatus();
    service.getUserStatus().subscribe(data => {
      expect(data).toBeTruthy();
    });
  });

  it('isAdmin should be true when there is an admin token', () => {
    localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIxN2UxM2E4ZS0xNGJiLTQ1YTAtYmZjNy0wOTNhZTU4OGQ2MTYiLCJyb2xlIjoiQWRtaW5Vc2VyIiwibmJmIjoxNjIzOTQ4MjM5LCJleHAiOjE2MzI1ODgyMzksImlhdCI6MTYyMzk0ODIzOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIn0.5UmS4C91vCVeDZP8Rx-G2CIVMY0_9z4KKS_wqqgG1aw")
    service.updateUserStatus();
    expect(service.userIsAdmin).toBeTruthy();
  });

  afterEach(() => {
    localStorage.clear();
  });
});
