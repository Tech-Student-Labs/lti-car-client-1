import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InventoryVehicleDetailsComponent } from '../components/inventory-vehicle-details/inventory-vehicle-details.component';
import { StoreVehiclesService } from '../services/store-vehicles.service';
import { SubmittedVehiclesService } from '../services/submitted-vehicles.service';

describe('InventoryVehicleDetailsComponent', () => {
  let component: InventoryVehicleDetailsComponent;
  let fixture: ComponentFixture<InventoryVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryVehicleDetailsComponent ],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [StoreVehiclesService, SubmittedVehiclesService]
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
