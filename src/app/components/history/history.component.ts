import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { SubmittedVehicles } from 'src/app/models/submitted-vehicles';
import { SubmittedVehiclesService } from 'src/app/services/submitted-vehicles.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  inventory: SubmittedVehicles[] = [];
  loadingStatus: string = "Loading...";
  doneLoading: boolean = false;

  constructor(private submittedVehicleService: SubmittedVehiclesService) { }

  ngOnInit(): void {
    this.submittedVehicleService.getByUserId().subscribe(data => {
      this.inventory = data;
      this.loadingStatus = "";
      this.doneLoading = true;
    });
  }
}
