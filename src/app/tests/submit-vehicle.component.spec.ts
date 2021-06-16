/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubmitVehicleComponent } from '../components/submit-vehicle/submit-vehicle.component';
import { GetVehiclemakesService } from '../services/get-vehiclemakes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SubmitVehicleComponent', () => {
  let component: SubmitVehicleComponent;
  let fixture: ComponentFixture<SubmitVehicleComponent>;
  let service: GetVehiclemakesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitVehicleComponent ],
      imports: [HttpClientTestingModule],
      // providers: [{provide: StoreVehiclesService, useClass: MockVehicleService}]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(SubmitVehicleComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GetVehiclemakesService);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should stub GetAllMakes method', () => {
  //   component.GetAllMakes();
  //   expect()
  // })
});
