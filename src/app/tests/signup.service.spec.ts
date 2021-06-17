import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SignupService } from '../services/signup.service';

describe('Service: Signup', () => {
  let service: SignupService;
  let httpServiceSpy: {post: jasmine.Spy};

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new SignupService(httpServiceSpy as any);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should stub post method', () => {
    httpServiceSpy.post.and.returnValue(of('Added user successfully'));
    expect(service.SignupUser('', '', '', '', '')).toBeTruthy();
    service.SignupUser('', '', '', '', '').subscribe(data => {
      expect(data).toEqual('Added user successfully');
    });
  });
});
