import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageDTO } from 'src/app/models/MessageDTO';
import { VehicleListing } from 'src/app/models/vehicle-listing';
import { VehicleResponse } from 'src/app/models/vehicle-response';
import { StoreVehiclesService } from 'src/app/services/store-vehicles.service';
import { SubmittedVehiclesService } from 'src/app/services/submitted-vehicles.service';

@Component({
  selector: 'app-inventory-vehicle-details',
  templateUrl: './inventory-vehicle-details.component.html',
  styleUrls: ['./inventory-vehicle-details.component.css']
})
export class InventoryVehicleDetailsComponent implements OnInit {
  @Input() vehicle: VehicleResponse = new VehicleResponse(0, "", "", 0, "", 0);
  message: string = '';
  marketValue: string = '';

  public priceGroup!: FormGroup;
  constructor(private storeVehicleService: StoreVehiclesService, private fb: FormBuilder, private submittedVehiclesService: SubmittedVehiclesService) { }

  ngOnInit(): void {
    this.priceGroup = this.fb.group({
      price: ["", [Validators.required]],
    });
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })
    
    this.marketValue = formatter.format(this.vehicle.marketValue);
  }

  Accept(): void {
    var price: number = this.priceGroup.controls.price.value;
    if (price != null)
    {
      console.log(price); 
      var listing: VehicleListing = new VehicleListing(price, this.vehicle);
      this.storeVehicleService.addVehicle(listing).subscribe();
      this.submittedVehiclesService.DeleteVehicleSubmission(this.vehicle.vinNumber).subscribe();
    }
  }

  Reject(): void {
    this.submittedVehiclesService.DeleteVehicleSubmission(this.vehicle.vinNumber).subscribe();
  }

}
