import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedVehicleDetailsComponent } from '../components/submitted-vehicle-details/submitted-vehicle-details.component';

describe('SubmittedVehicleDetailsComponent', () => {
  let component: SubmittedVehicleDetailsComponent;
  let fixture: ComponentFixture<SubmittedVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittedVehicleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
