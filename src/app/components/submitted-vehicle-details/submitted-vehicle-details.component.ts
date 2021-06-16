import { Component, Input, OnInit } from '@angular/core';
import { SubmittedVehicles } from 'src/app/models/submitted-vehicles';
import { VehicleResponse } from 'src/app/models/vehicle-response';

@Component({
  selector: 'app-submitted-vehicle-details',
  templateUrl: './submitted-vehicle-details.component.html',
  styleUrls: ['./submitted-vehicle-details.component.css']
})
export class SubmittedVehicleDetailsComponent implements OnInit {

 @Input() vehicle: SubmittedVehicles = new SubmittedVehicles(new Date(),new VehicleResponse(0,"","",0,"",0));


  constructor() { }

  ngOnInit(): void {
  }

}
