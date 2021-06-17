import { Component, OnInit } from '@angular/core';
import { VehicleListing } from 'src/app/models/vehicle-listing';
import { StoreVehiclesService } from 'src/app/services/store-vehicles.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  inventory: VehicleListing[] = [];
  loadingStatus: string = "Loading...";
  doneLoading: boolean = false;

  constructor(private vehicleService: StoreVehiclesService) { }

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe(data => {
      this.inventory = data;
      this.loadingStatus = "";
      this.doneLoading = true;
    });
  }

}
