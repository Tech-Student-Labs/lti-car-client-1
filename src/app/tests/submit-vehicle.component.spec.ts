/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubmitVehicleComponent } from '../components/submit-vehicle/submit-vehicle.component';
import { GetVehiclemakesService } from '../services/get-vehiclemakes.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockMakesService } from '../models/mock-makes-service';
import { GetVehiclemodelsService } from '../services/get-vehiclemodels.service';
import { MockModelsService } from '../models/mock-models-service';
import { throwError } from 'rxjs'; // make sure to import the throwError from rxjs
import { GetMarketvaluebymakemodelService } from '../services/get-marketvaluebymakemodel.service';
import { MockMarketValueByMakeModel } from '../models/mock-marketvaluebymakemodel';

describe('SubmitVehicleComponent', () => {
  let component: SubmitVehicleComponent;
  let fixture: ComponentFixture<SubmitVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitVehicleComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: GetVehiclemakesService, useClass: MockMakesService},
                  {provide: GetVehiclemodelsService, useClass: MockModelsService},
                  {provide: GetMarketvaluebymakemodelService, useClass: MockMarketValueByMakeModel}]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(SubmitVehicleComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stub GetMakesByType method', () => {
    component.GetMakesByType();
    let service: GetVehiclemakesService;
    service = TestBed.inject(GetVehiclemakesService);
    expect(component.resMake.Results.length).toEqual(5);
  });

  it('should stub GetAllModels', () => {
    component.GetAllModels();
    let service: GetVehiclemodelsService;
    service = TestBed.inject(GetVehiclemodelsService);
    expect(component.resModel.Results.length).toEqual(3);
  });

  it('should handle make error', () => {
    const xService = fixture.debugElement.injector.get(GetVehiclemakesService);
    const mockCall = spyOn(xService,'GetMakesByType').and.returnValue(throwError("fail"));
    component.GetMakesByType();
    expect(component.errorMsg).toBe("fail");
  });

  it('should handle model error', () => {
    const xService = fixture.debugElement.injector.get(GetVehiclemodelsService);
    const mockCall = spyOn(xService, 'GetAllModels').and.returnValue(throwError('fail'));
    component.GetAllModels();
    expect(component.errorMsg).toBe('fail');
  });

  it('should stub GetFinalMarketValue', () => {
    component.GetFinalMarketValue();
    let service: GetMarketvaluebymakemodelService;
    service = TestBed.inject(GetMarketvaluebymakemodelService);
    expect(component.valueFinalized).toBeTruthy();
  });

  it('should handle GetFinalMarketValue error', () => {
    const xService = fixture.debugElement.injector.get(GetMarketvaluebymakemodelService);
    const mockCall = spyOn(xService, 'GetMarketValue').and.returnValue(throwError('fail'));
    component.GetFinalMarketValue();
    expect(component.errorMsg).toBe('fail');
  });
});