import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { StoreVehiclesService } from '../services/store-vehicles.service';
import { Observable, of, throwError } from 'rxjs';
import ApiResponse from '../shared/ApiResponse';
import { tap } from 'rxjs/operators';

describe('StoreVehiclesService', () => {
  let service: StoreVehiclesService;
  let httpServiceSpy: {get: jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });    
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new StoreVehiclesService(httpServiceSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll should return values', () => {
    let apiData: ApiResponse = {vehicles: [{Model: "Mustang", Year:"2019", VINNumber:"q98f7hq4"}]};
    httpServiceSpy.get.and.returnValue(of(apiData));
    expect(service.getAll()).toBeDefined();
    service.getAll().subscribe( data => {
      console.log(data);
      console.log(apiData);
      expect(data).toEqual(apiData);
      expect(data).toBeTruthy();
      expect(data).toBeDefined();
    });
  });

  it('getAll should return an error when given wrong format', () => {
    httpServiceSpy.get.and.returnValue(throwError("bad data"));
    service.getAll().subscribe()
    expect(service.status).toEqual("bad data");
  });
});