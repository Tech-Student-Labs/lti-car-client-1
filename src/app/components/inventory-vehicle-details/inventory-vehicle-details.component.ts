import { Component, Input, OnInit } from '@angular/core';
import { VehicleResponse } from 'src/app/models/vehicle-response';

@Component({
  selector: 'app-inventory-vehicle-details',
  templateUrl: './inventory-vehicle-details.component.html',
  styleUrls: ['./inventory-vehicle-details.component.css']
})
export class InventoryVehicleDetailsComponent implements OnInit {
  @Input() vehicle: VehicleResponse = new VehicleResponse(0,"","",0,"",0);

  constructor() { }

  ngOnInit(): void {
  }

}
