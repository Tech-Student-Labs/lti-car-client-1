/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { GetVehiclemodelsService } from '../services/get-vehiclemodels.service';

describe('Service: GetAllVehicleModels', () => {
  let service: GetVehiclemodelsService;
  let httpServiceSpy: {get: jasmine.Spy};

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new GetVehiclemodelsService(httpServiceSpy as any);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should stub GetAllModels', () => {
    var models: string[] = ['epstein', 'didnt', 'kill', 'himself'];
    httpServiceSpy.get.and.returnValue(of(models));
    expect(service.GetAllModels('hi')).toBeTruthy();
    service.GetAllModels('hi').subscribe(data => {
      expect(data).toEqual(models);
    });
  });
});
