/* tslint:disable:no-unusd-variable */
import { async, ComponentFixture, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { VehicleListComponent } from '../components/vehicle-list/vehicle-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreVehiclesService } from '../services/store-vehicles.service';
import { MockVehicleService } from '../models/mock-vehicle-service';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let service: StoreVehiclesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleListComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: StoreVehiclesService, useClass: MockVehicleService}]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(StoreVehiclesService);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get vehicle data', () => {
    expect(component.inventory.length).toEqual(5);
  });

  it('should render 5 cards', () => {
    expect(fixture.nativeElement.querySelectorAll('.card').length).toEqual(5);
  });

  it('should have a loading status element', () => {
    expect(fixture.nativeElement.querySelector('#loadingStatus')).toBeTruthy();
  });
});
