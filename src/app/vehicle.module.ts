import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreVehiclesService } from './services/store-vehicles.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { HistoryComponent } from './components/history/history.component';
import { SubmittedVehicleDetailsComponent } from './components/submitted-vehicle-details/submitted-vehicle-details.component';
import { SubmittedVehiclesService } from './services/submitted-vehicles.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [
    VehicleListComponent,
    VehicleDetailsComponent,
    HistoryComponent,
    SubmittedVehicleDetailsComponent
  ],
  providers: [
    StoreVehiclesService,
    SubmittedVehiclesService
  ]
})
export class VehicleModule { }
