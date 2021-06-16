import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/landing-page/landing-page.component';
import { VehicleModule } from './vehicle.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubmitVehicleComponent } from './components/submit-vehicle/submit-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubmitVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VehicleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
