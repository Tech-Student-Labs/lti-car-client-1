import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryVehicleDetailsComponent } from './inventory-vehicle-details.component';

describe('InventoryVehicleDetailsComponent', () => {
  let component: InventoryVehicleDetailsComponent;
  let fixture: ComponentFixture<InventoryVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryVehicleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
