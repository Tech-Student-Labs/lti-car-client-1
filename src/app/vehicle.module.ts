import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreVehiclesService } from './services/store-vehicles.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    StoreVehiclesService
  ]
})
export class VehicleModule { }
