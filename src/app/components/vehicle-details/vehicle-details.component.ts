import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleBasic } from 'src/app/models/vehicle-basic';
import { VehicleListing } from 'src/app/models/vehicle-listing';
import { VehicleResponse } from 'src/app/models/vehicle-response';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  @Input() vehicle: VehicleListing = new VehicleListing(0,0,new VehicleResponse(0,"","",0,"",0));

  constructor() { }

  ngOnInit() {
  }

}
