/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehicleDetailsComponent } from '../components/vehicle-details/vehicle-details.component';
import { VehicleBasic } from '../models/vehicle-basic';

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
    component.vehicle = new VehicleBasic("asd","asd","asd");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render vehicle model', () => {
    expect(fixture.nativeElement.querySelector('#vehicle-model')).toBeTruthy();
  });

  it('should render vehicle year', () => {
    expect(fixture.nativeElement.querySelector('#vehicle-year')).toBeTruthy();
  });

  it('should render vehicle vin', () => {
    expect(fixture.nativeElement.querySelector('#vehicle-vin')).toBeTruthy();
  });
});
