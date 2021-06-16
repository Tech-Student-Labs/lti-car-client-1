/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { GetMarketvaluebymakemodelService } from '../services/get-marketvaluebymakemodel.service';

describe('Service: GetAllVehicleMakes', () => {
  let service: GetMarketvaluebymakemodelService;
  let httpServiceSpy: {get: jasmine.Spy};

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new GetMarketvaluebymakemodelService(httpServiceSpy as any);
  });

  it('should ...', inject([GetMarketvaluebymakemodelService], (service: GetMarketvaluebymakemodelService) => {
    expect(service).toBeTruthy();
  }));
});
