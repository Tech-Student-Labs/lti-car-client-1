import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleBasic } from 'src/app/models/vehicle-basic';
import { StoreVehiclesService } from 'src/app/services/store-vehicles.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

//
  inventory: VehicleBasic[] = [];

  constructor(private vehicleService: StoreVehiclesService) { }

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe(data => {
      this.inventory = data.vehicles;
    });
  }

}
