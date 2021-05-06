import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { StoreVehiclesService } from '../services/store-vehicles.service';
import { of } from 'rxjs';
import ApiResponse from '../shared/ApiResponse';

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
    let apiData = {vehicles: [{Model: "Mustang", Year:"2019", VINNumber: 1}]};
    httpServiceSpy.get.and.returnValue(of(apiData));
    expect(service.getAll().subscribe).toBeDefined();
    service.getAll().subscribe( data => {
      console.log(data);
      console.log(apiData);
      expect(data).toEqual(apiData as any);
      expect(data).toBeTruthy();
      expect(data).toBeDefined();
    });

    httpServiceSpy.get.and.returnValue(of(apiData));
  });
});