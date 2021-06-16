import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NEVER, Observable, of, throwError } from 'rxjs';
//import ApiResponse from '../shared/ApiResponse';
import { token } from '../models/TokenDTO'
import { tap } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
describe('Service: Login', () => {
  let service: LoginService;
  let httpServiceSpy: {post: jasmine.Spy};
  var token: token = {token: "jksndfugbwuehrywyr32424242"}
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
    httpServiceSpy.post.and.returnValue(of(token));
    expect(service.LoginUser('', '')).toBeTruthy();
    service.LoginUser('', '').subscribe(data => {
      expect(data).toEqual(token);
    });
  });

  it('getToken() should return the token if present ]',() => {
    localStorage.setItem('token',"jksndfjksdnfjksnfjsdn");
    let token = service.getToken();
    expect(token).toEqual("jksndfjksdnfjksnfjsdn");
  });

});
