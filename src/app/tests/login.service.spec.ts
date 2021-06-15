import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of, throwError } from 'rxjs';
//import ApiResponse from '../shared/ApiResponse';
import { tap } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

describe('Service: Login', () => {
  let service: LoginService;
  let httpServiceSpy: {post: jasmine.Spy};

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new LoginService(httpServiceSpy as any);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should stub LoginUser', () => {
    httpServiceSpy.post.and.returnValue(of('Signed in user successfully'));
    expect(service.LoginUser('', '')).toBeTruthy();
    service.LoginUser('', '').subscribe(data => {
      expect(data).toEqual('Signed in user successfully');
    });
  });
});
