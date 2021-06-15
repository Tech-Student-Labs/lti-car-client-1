/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { GetVehiclemakesService } from '../services/get-vehiclemakes.service';

describe('Service: GetAllVehicleMakes', () => {
  let service: GetVehiclemakesService;
  let httpServiceSpy: {get: jasmine.Spy};

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new GetVehiclemakesService(httpServiceSpy as any);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should stub GetAllMakes', () => {
    var makes: string[] = ['epstein', 'didnt', 'kill', 'himself'];
    httpServiceSpy.get.and.returnValue(of(makes));
    expect(service.GetAllMakes()).toBeTruthy();
    service.GetAllMakes().subscribe(data => {
      expect(data).toEqual(makes);
    });
  });
});
