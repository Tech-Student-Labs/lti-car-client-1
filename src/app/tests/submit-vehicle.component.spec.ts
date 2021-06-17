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
import { of, throwError } from 'rxjs';
import { SubmittedVehiclesService } from '../services/submitted-vehicles.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('SubmitVehicleComponent', () => {
  let component: SubmitVehicleComponent;
  let fixture: ComponentFixture<SubmitVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitVehicleComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: GetVehiclemakesService, useClass: MockMakesService},
                  {provide: GetVehiclemodelsService, useClass: MockModelsService},
                FormBuilder, ReactiveFormsModule]
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
    expect(component.message).toBe("fail");
  });

  it('should handle model error', () => {
    const xService = fixture.debugElement.injector.get(GetVehiclemodelsService);
    const mockCall = spyOn(xService, 'GetAllModels').and.returnValue(throwError('fail'));
    component.GetAllModels();
    expect(component.message).toBe('fail');
  });

  it('should stub PostVehicleSubmission', () => {
    let service: SubmittedVehiclesService;
    service = TestBed.inject(SubmittedVehiclesService);
    const mockCall = spyOn(service, 'AddVehicleSubmission').and.returnValue(of("{obj: {error: {Message: 'Failed'}}}"));
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJiODdkODU0NS01OWRjLTRlYWQtYmQ4Ny0zNGIxNDY4YTI5ZmYiLCJyb2xlIjoiUmVndWxhclVzZXIiLCJuYmYiOjE2MjM4NzEwODEsImV4cCI6MTYzMjUxMTA4MSwiaWF0IjoxNjIzODcxMDgxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAifQ.OKTIErT7vo9SKMN4R3irfNLd6wsyjjadYEQeoYQv_IU');
    component.PostVehicleSubmission();
    expect(component.postMessage2).toBe('success');
  });

  it('PostVehicleSubmission should handle errors', () => {
    let service: SubmittedVehiclesService;
    service = TestBed.inject(SubmittedVehiclesService);
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJiODdkODU0NS01OWRjLTRlYWQtYmQ4Ny0zNGIxNDY4YTI5ZmYiLCJyb2xlIjoiUmVndWxhclVzZXIiLCJuYmYiOjE2MjM4NzEwODEsImV4cCI6MTYzMjUxMTA4MSwiaWF0IjoxNjIzODcxMDgxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAifQ.OKTIErT7vo9SKMN4R3irfNLd6wsyjjadYEQeoYQv_IU');
    component.PostVehicleSubmission();
    expect(component.postMessage).toBe('fail');
  })
});