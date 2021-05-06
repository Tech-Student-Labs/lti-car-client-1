import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleBasic } from 'src/app/models/vehicle-basic';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  @Input() vehicle: VehicleBasic = new VehicleBasic("", "", "");

  constructor() { }

  ngOnInit() {
  }

}
