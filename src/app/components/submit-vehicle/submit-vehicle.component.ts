import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmittedVehicles } from 'src/app/models/submitted-vehicles';
import { VehicleResponse } from 'src/app/models/vehicle-response';
import { GetVehiclemakesService } from 'src/app/services/get-vehiclemakes.service';
import { GetVehiclemodelsService } from 'src/app/services/get-vehiclemodels.service';
import { SubmittedVehiclesService } from 'src/app/services/submitted-vehicles.service';

@Component({
  selector: 'app-submit-vehicle',
  templateUrl: './submit-vehicle.component.html',
  styleUrls: ['./submit-vehicle.component.css']
})
export class SubmitVehicleComponent implements OnInit {

  constructor(private makesService: GetVehiclemakesService, private modelsService: GetVehiclemodelsService, private submittedVehicles: SubmittedVehiclesService, private fb: FormBuilder) { }

  resMake: {Results: {MakeId: number, MakeName: string, VehicleTypeId: number, VehicleTypeName: string}[]} = {Results: []};
  resModel: {Results: {Make_ID: number, Make_Name: string, Model_ID: number, Model_Name: string}[]} = {Results: []};
  public makes: string[] = [];
  public models: string[] = [];
  public loadingStatus: boolean = false;
  public loadingStatus2: boolean = false;
  public finalMarketValue: any;
  public valueFinalized: boolean = false;

  public message: string = '';

  public submitVehiclesGroup!: FormGroup;

  ngOnInit() {
    this.submitVehiclesGroup = this.fb.group({
      type: ['', [Validators.required, Validators.minLength(1)]],
      make: ['', [Validators.required, Validators.minLength(1)]],
      model: ['', [Validators.required, Validators.minLength(1)]],
      year: ['', [Validators.required, Validators.minLength(1)]],
      vin: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  GetMakesByType(): void
  {
    this.makes = [];
    this.loadingStatus = false;
    var type = this.submitVehiclesGroup.value.type;
    this.makesService.GetMakesByType(type).subscribe(
    (data) => {
      this.message = '';
      this.resMake = data;
      
      for(let i = 0; i < this.resMake.Results.length; i++)
      {
        this.makes.push(this.resMake.Results[i].MakeName);
      }
      this.loadingStatus = false;
    },
    (error) => {
      this.makes = [];
      this.loadingStatus = false;
      this.message = error;
    });
  }

  GetAllModels(): void
  {
    this.models = [];
    var make = this.submitVehiclesGroup.value.make;
    this.loadingStatus2 = true;
    this.modelsService.GetAllModels(make.split(' ')[0]).subscribe(
    (data) => {
      this.message = '';
      this.resModel = data;
      
      for(let i = 0; i < this.resModel.Results.length; i++)
      {
        this.models.push(this.resModel.Results[i].Model_Name);
      }
      this.loadingStatus2 = false;
    },
    (error) => {
      this.models = [];
      this.loadingStatus2 = false;
      this.message = error;
    });
  }

  PostVehicleSubmission()
  {
    
    let vehicleResponse: VehicleResponse = new VehicleResponse(5000, 
      this.submitVehiclesGroup.value.make,
      this.submitVehiclesGroup.value.model,
      this.submitVehiclesGroup.value.year,
      this.submitVehiclesGroup.value.vin,
      0
    );
    let submission: SubmittedVehicles = new SubmittedVehicles('', new Date(), vehicleResponse);
    this.submittedVehicles.AddVehicleSubmission(submission).subscribe(
      (data) => {
        this.message = data;
      },
      (error) => {
        this.message = error;
      }
    )
  }
}
