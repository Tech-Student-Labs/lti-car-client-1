import { Component, OnInit } from '@angular/core';
import { SubmittedVehicles } from 'src/app/models/submitted-vehicles';
import { VehicleResponse } from 'src/app/models/vehicle-response';
import { InventoryService } from 'src/app/services/inventory.service';
import { SubmittedVehiclesService } from 'src/app/services/submitted-vehicles.service';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.css']
})
export class InventoryPageComponent implements OnInit {

  inventory: SubmittedVehicles[] = [];
  loadingStatus: string = "Loading...";
  doneLoading: boolean = false;

  constructor(private vehicleService: SubmittedVehiclesService) { }

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe(data => {
      this.inventory = data;
      this.loadingStatus = "";
      this.doneLoading = true;
    });
  }

}
