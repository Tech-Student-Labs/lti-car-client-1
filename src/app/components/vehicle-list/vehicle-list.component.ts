import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleBasic } from 'src/app/models/vehicle-basic';
import { VehicleResponse } from 'src/app/models/vehicle-response';
import { StoreVehiclesService } from 'src/app/services/store-vehicles.service';
import ApiResponse from 'src/app/shared/ApiResponse';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

//
  inventory: VehicleResponse[] = [];

  constructor(private vehicleService: StoreVehiclesService) { }

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe(data => {
      this.inventory = data.vehicles;
    });
  }

}
