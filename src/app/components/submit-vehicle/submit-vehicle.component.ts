import { Component, OnInit } from '@angular/core';
import { GetVehiclemakesService } from 'src/app/services/get-vehiclemakes.service';

@Component({
  selector: 'app-submit-vehicle',
  templateUrl: './submit-vehicle.component.html',
  styleUrls: ['./submit-vehicle.component.css']
})
export class SubmitVehicleComponent implements OnInit {

  constructor(private makesService: GetVehiclemakesService) { }

  res: any;
  public makes: string[] = [];

  ngOnInit() {
    // this.GetAllMakes();
  }

  // GetAllMakes(): void
  // {
  //   this.makesService.GetAllMakes().subscribe(data => {
  //     this.res = data.Results;
      
  //     for(let i = 0; i < this.res.Results.length; i++)
  //     {
  //       this.makes.push(this.res.Make_Name);
  //     }
  //     console.log(this.makes);
  //   });
  // }
}
