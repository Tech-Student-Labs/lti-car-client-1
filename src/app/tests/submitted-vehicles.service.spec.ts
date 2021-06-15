import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreVehiclesService } from '../services/store-vehicles.service';
import { Observable, of, throwError } from 'rxjs';
//import ApiResponse from '../shared/ApiResponse';
import { tap } from 'rxjs/operators';
import { VehicleResponse } from '../models/vehicle-response';
import { Vehicle } from '../models/vehicle';
import { SubmittedVehiclesService } from '../services/submitted-vehicles.service';
import { SubmittedVehicles } from '../models/submitted-vehicles';

describe('SubmittedVehiclesService', () => {
  let service: SubmittedVehiclesService;
  let httpServiceSpy: {get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy};

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    service = new SubmittedVehiclesService(httpServiceSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getByUserId should return values', () => {
    let apiData: SubmittedVehicles[] =  [{date:new Date(), id : 1, make: "Ford", model: "Mustang", year:2019, vinNumber:"q98f7hq4"}];
    httpServiceSpy.get.and.returnValue(of(apiData));
    expect(service.getByUserId()).toBeDefined();
    service.getByUserId().subscribe( data => {
      console.log(data);
      console.log(apiData);
      expect(data).toEqual(apiData);
      expect(data).toBeTruthy();
      expect(data).toBeDefined();
    });

  });

  it('getAll should return an error when given wrong format', async() => {
    await httpServiceSpy.get.and.returnValue(throwError("bad data"));
    await service.getByUserId().subscribe()
    expect(service.status).toEqual("bad data");
  });

});
