import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreVehiclesService } from '../services/store-vehicles.service';
import { Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { VehicleResponse } from '../models/vehicle-response';
import { Vehicle } from '../models/vehicle';
import { VehicleListing } from '../models/vehicle-listing';
import { MessageDTO } from '../models/MessageDTO';

describe('StoreVehiclesService', () => {
  let service: StoreVehiclesService;
  let httpServiceSpy: {get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy};

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    service = new StoreVehiclesService(httpServiceSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll should return values', () => {
    let apiData: VehicleListing[] =  [{price: 2000, vehicle: {id : 1, make: "Ford", model: "Mustang", year:2019, vinNumber:"q98f7hq4", marketValue: 12000}}];
    httpServiceSpy.get.and.returnValue(of(apiData));
    expect(service.getAll()).toBeDefined();
    service.getAll().subscribe( data => {
      expect(data).toEqual(apiData);
      expect(data).toBeTruthy();
      expect(data).toBeDefined();
    });
  });

  it('getAll should return an error when given wrong format', async() => {
    await httpServiceSpy.get.and.returnValue(throwError("bad data"));
    await service.getAll().subscribe()
    expect(service.status).toEqual("bad data");
  });

  it('addVehicle should be stubbed', () => {
    let vehicle: VehicleListing =  new VehicleListing(5000,new VehicleResponse(1, "Ford", "Mustang", 2019, "q98f7hq4", 12000));
    httpServiceSpy.post.and.returnValue(of(new MessageDTO("Successfuly Added")));
    expect(service.addVehicle(vehicle)).toBeDefined();
    service.addVehicle(vehicle).subscribe(data => {
      expect(data).toEqual(new MessageDTO("Successfuly Added"));
      expect(data).toBeTruthy();
      expect(data).toBeDefined();
    });
  });

  it('addVehicle should return an error when given wrong format', async() => {
    await httpServiceSpy.post.and.returnValue(throwError("bad data"));
    await service.addVehicle(new VehicleListing( 2000, new VehicleResponse(1, "Ford", "Mustang", 2019, "q98f7hq4", 12000))).subscribe()
    expect(service.status).toEqual("bad data");
  });

  it('updateVehicle should be stubbed', () => {
    let vehicle: VehicleListing =  new VehicleListing(2000, new VehicleResponse(1, "Ford", "Mustang", 2019, "q98f7hq4", 12000));
    httpServiceSpy.put.and.returnValue(of(vehicle));
    expect(service.updateVehicle(vehicle)).toBeDefined();
    service.updateVehicle(vehicle).subscribe(data => {
      expect(data).toEqual(vehicle);
      expect(data).toBeTruthy();
      expect(data).toBeDefined();
    });
  });

  it('updateVehicle should return an error when given wrong format', async() => {
    await httpServiceSpy.put.and.returnValue(throwError("bad data"));
    await service.updateVehicle(new VehicleListing(2000, new VehicleResponse(1, "Ford", "Mustang", 2019, "q98f7hq4", 12000))).subscribe()
    expect(service.status).toEqual("bad data");
  });

  it('deleteVehicle should be stubbed', () => {
    let vehicle: VehicleListing =  new VehicleListing(2000, new VehicleResponse(1, "Ford", "Mustang", 2019, "q98f7hq4", 12000));
    httpServiceSpy.delete.and.returnValue(of(vehicle));
    expect(service.deleteVehicle(1)).toBeDefined();
    service.deleteVehicle(1).subscribe(data => {
      expect(data).toEqual(vehicle);
      expect(data).toBeTruthy();
      expect(data).toBeDefined();
    });
  });

  it('deleteVehicle should return an error when given wrong format', async() => {
    await httpServiceSpy.delete.and.returnValue(throwError("bad data"));
    await service.deleteVehicle(-1).subscribe()
    expect(service.status).toEqual("bad data");
  });
});
