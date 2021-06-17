import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { SubmittedVehicles } from 'src/app/models/submitted-vehicles';
import { SubmittedVehiclesService } from 'src/app/services/submitted-vehicles.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  // template: `
  // <style>
  //   div {
  //     text-align: right;
  //     height: 100%;
  //     width: 100%;
  //     background-color: black;
  //   }
  // </style>
  // <div [innerHTML]=htmlContent>
  // </div>
  // `,
  // styles: ['h5 { color: red; }']
})
export class HistoryComponent implements OnInit {

  inventory: SubmittedVehicles[] = [];
  loadingStatus: string = "Loading...";
  doneLoading: boolean = false;
  // htmlContent:string = '';
  // emptySpaces: number = 0;
  // counter: number = 0;

  constructor(private submittedVehicleService: SubmittedVehiclesService) { }

  ngOnInit(): void {
    //add user id parameter
    this.submittedVehicleService.getByUserId().subscribe(data => {
      this.inventory = data;
      // this.emptySpaces = (Math.trunc(this.inventory.length / 5 + 1) * 5);
      // this.emptySpaces -= this.inventory.length;
      this.loadingStatus = "";
      this.doneLoading = true;

      // for(let j = 0; j < Math.trunc(this.inventory.length / 5 + 1); j++)
      // {
      //   this.htmlContent += `<div class="card-group mx-auto">`;
      //   for(let i = j * 5; i < Math.min(j * 5 + 5, this.inventory.length - j * 5 + 5); i++)
      //   {
      //     this.htmlContent += `
      //     <div class="card pb-5">
      //       <div class="card-body">
      //         <h3 class="card-title text-muted text-right">${this.inventory[i].vehicle.year} ${this.inventory[i].vehicle.make} ${this.inventory[i].vehicle.model}</h3>
      //         <div class="card-text-group">
      //           <h5 class="card-text text-muted text-right">${this.inventory[i].vehicle.vinNumber}</h5>
      //           <p class="text-muted text-right">Submitted on: ${this.inventory[i].timeStamp.toString().substring(0, 10)} at ${this.inventory[i].timeStamp.toString().substring(11, 19)}</p>
      //         </div>
      //       </div>
      //       <img src="../../../assets/default_car.png">
      //     </div>
      //     `;
      //     this.counter += 1;
      //   }
      //   if(this.counter == this.inventory.length)
      //   {
      //     for(let k = 0; k < this.emptySpaces; k++)
      //     {
      //       this.htmlContent += `
      //       <div class="card">
      //         <div class="card-body">
      //           <h5 class="card-title"></h5>
      //           <div class="card-text-group">
      //             <h3 class="card-text"></h3>
      //       `;
      //     }
      //   }
      //   this.htmlContent += `</div>`
      // }
    });
  }
}
