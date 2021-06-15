import { Component, Input, OnInit } from '@angular/core';
import { SubmittedVehicles } from 'src/app/models/submitted-vehicles';

@Component({
  selector: 'app-submitted-vehicle-details',
  templateUrl: './submitted-vehicle-details.component.html',
  styleUrls: ['./submitted-vehicle-details.component.css']
})
export class SubmittedVehicleDetailsComponent implements OnInit {

 @Input() vehicle: SubmittedVehicles = new SubmittedVehicles(new Date(),0,"","",0,"");


  constructor() { }

  ngOnInit(): void {
  }

}
