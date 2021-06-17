import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreVehiclesService } from '../services/store-vehicles.service';
import { Observable, of, throwError } from 'rxjs';
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
    service = new SubmittedVehiclesService(httpServiceSpy as any);
    localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI5YjNiZGI4Ny1kZTQ3LTQxOGQtODg3ZS0zMzVkYTUzNTBmMWUiLCJyb2xlIjoiQWRtaW5Vc2VyIiwibmJmIjoxNjIzNzEwNDUzLCJleHAiOjE2MzIzNTA0NTMsImlhdCI6MTYyMzcxMDQ1MywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIn0.g11nmSnglviiN2H_zW5hOaNOnnMqwOVm_soOUcshlkM");
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getByUserId should return values', () => {
    let apiData: SubmittedVehicles[] =  [{userId: 'string', timeStamp: new Date(), vehicle: new VehicleResponse(1, "Ford", "Mustang", 2019, "q98f7hq4", 1111)}];
    httpServiceSpy.get.and.returnValue(of(apiData));
    expect(service.getByUserId()).toBeDefined();
 
    service.getByUserId().subscribe( data => {
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

  it('AddVehicleSubmission should call post http', async() => {
    let submission: SubmittedVehicles = new SubmittedVehicles('hello', new Date(), new VehicleResponse(1, '', '', 1994, '', 30000));
    await httpServiceSpy.post.and.returnValue(of(''));
    expect(service.AddVehicleSubmission(submission)).toBeDefined();
    service.AddVehicleSubmission(submission).subscribe(
      (data: any) => {
        expect(data).toEqual('');
      }
    )
  });

  it('AddVehicleSubmission should handle errors', async() => {
    let submission: SubmittedVehicles = new SubmittedVehicles('hello', new Date(), new VehicleResponse(1, '', '', 1994, '', 30000));
    await httpServiceSpy.post.and.returnValue(throwError({status: 404, error: {Message: "Submission Failed"}}));
    expect(service.AddVehicleSubmission(submission)).toBeDefined();
    service.AddVehicleSubmission(submission).subscribe(
      (data: any) => {},
      (err: any) => {
        expect(err).toEqual({status: 404, error: {Message: "Submission Failed"}});
      }
    )
  });
});
