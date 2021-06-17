import { Component, OnInit } from '@angular/core';
import { VehicleResponse } from 'src/app/models/vehicle-response';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.css']
})
export class InventoryPageComponent implements OnInit {

  inventory: VehicleResponse[] = [];
  loadingStatus: string = "Loading...";
  doneLoading: boolean = false;

  constructor(private vehicleService: InventoryService) { }

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe(data => {
      this.inventory = data;
      this.loadingStatus = "";
      this.doneLoading = true;
    });
  }

}
