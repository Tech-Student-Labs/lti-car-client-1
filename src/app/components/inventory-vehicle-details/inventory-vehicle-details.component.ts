import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private storeVehicleService: StoreVehiclesService, private submittedVehiclesService: SubmittedVehiclesService) { }

  ngOnInit(): void {
  }

  Accept(): void {
    var price: number = parseInt((document.getElementById("priceInput") as HTMLInputElement).value);
    if (price != null)
    {
      console.log(price); 
      var listing: VehicleListing = new VehicleListing(this.vehicle.id, price, this.vehicle);
      this.storeVehicleService.addVehicle(listing).subscribe();
      this.submittedVehiclesService.DeleteVehicleSubmission(this.vehicle.vinNumber).subscribe();
    }
  }

  Reject(): void {
    this.submittedVehiclesService.DeleteVehicleSubmission(this.vehicle.vinNumber).subscribe();
  }

}
