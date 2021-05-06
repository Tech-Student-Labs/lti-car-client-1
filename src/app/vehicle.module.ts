import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreVehiclesService } from './services/store-vehicles.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [
    VehicleListComponent,
    VehicleDetailsComponent
  ],
  providers: [
    StoreVehiclesService
  ]
})
export class VehicleModule { }
