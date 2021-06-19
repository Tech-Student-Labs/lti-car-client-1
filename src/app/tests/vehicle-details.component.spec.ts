/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehicleDetailsComponent } from '../components/vehicle-details/vehicle-details.component';
import { VehicleBasic } from '../models/vehicle-basic';
import { VehicleResponse } from '../models/vehicle-response';
import { VehicleListing } from '../models/vehicle-listing';

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsComponent;
  let fixture: ComponentFixture<VehicleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDetailsComponent);
    component = fixture.componentInstance;
    component.vehicle = new VehicleListing(0,new VehicleResponse(0,"","",0,"",0));
    ;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render vehicle make, model, year', () => {
    expect(fixture.nativeElement.querySelector('.card-title')).toBeTruthy();
  });

  it('should render vehicle vin', () => {
    expect(fixture.nativeElement.querySelector('.card-text')).toBeTruthy();
  });
});
