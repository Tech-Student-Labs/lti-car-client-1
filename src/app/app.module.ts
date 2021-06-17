import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/landing-page/landing-page.component';
import { VehicleModule } from './vehicle.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubmitVehicleComponent } from './components/submit-vehicle/submit-vehicle.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
