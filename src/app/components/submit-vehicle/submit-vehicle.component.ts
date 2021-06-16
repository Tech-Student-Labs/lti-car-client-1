import { Component, OnInit } from '@angular/core';
import { GetMarketvaluebymakemodelService } from 'src/app/services/get-marketvaluebymakemodel.service';
import { GetVehiclemakesService } from 'src/app/services/get-vehiclemakes.service';
import { GetVehiclemodelsService } from 'src/app/services/get-vehiclemodels.service';

@Component({
  selector: 'app-submit-vehicle',
  templateUrl: './submit-vehicle.component.html',
  styleUrls: ['./submit-vehicle.component.css']
})
export class SubmitVehicleComponent implements OnInit {

  constructor(private makesService: GetVehiclemakesService, private modelsService: GetVehiclemodelsService, private valueService: GetMarketvaluebymakemodelService) { }

  resMake: {Results: {MakeId: number, MakeName: string, VehicleTypeId: number, VehicleTypeName: string}[]} = {Results: []};
  resModel: {Results: {Make_ID: number, Make_Name: string, Model_ID: number, Model_Name: string}[]} = {Results: []};
  public makes: string[] = [];
  public models: string[] = [];
  public loadingStatus: boolean = false;
  public loadingStatus2: boolean = false;
  public finalMarketValue: any;
  public valueFinalized: boolean = false;

  public errorMsg: string = '';

  ngOnInit() {
  }

  GetMakesByType(): void
  {
    this.makes = [];
    this.loadingStatus = false;
    var type: HTMLSelectElement = document.getElementById('selecttype') as HTMLSelectElement;
    var typeString: string = type.value;
    this.makesService.GetMakesByType(typeString).subscribe(
    (data) => {
      this.errorMsg = '';
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
      this.errorMsg = error;
    });
  }

  GetAllModels(): void
  {
    this.models = [];
    var makeElement: HTMLSelectElement = document.getElementById('selectmake') as HTMLSelectElement;
    var make = makeElement.value;
    this.loadingStatus2 = true;
    this.modelsService.GetAllModels(make.split(' ')[0]).subscribe(
    (data) => {
      this.errorMsg = '';
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
      this.errorMsg = error;
    });
  }

  GetFinalMarketValue(): void
  {
    var make: string = (document.getElementById('selectmake') as HTMLSelectElement).value;
    var model: string = (document.getElementById('selectmodel') as HTMLSelectElement).value;
    var year: string = (document.getElementById('selectyear') as HTMLSelectElement).value;
    this.valueService.GetMarketValue(year, make, model).subscribe(
      (data) => {
        this.valueFinalized = true;
        this.finalMarketValue = data.attributes.manufacturer_suggested_retail_price;
      },
      (error) => {
        this.errorMsg = error;
      }
    )
  }
}
