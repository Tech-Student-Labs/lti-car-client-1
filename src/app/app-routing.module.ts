import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { SignupComponent } from './components/signup/signup.component';
import { SubmitVehicleComponent } from './components/submit-vehicle/submit-vehicle.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';

const routes: Routes = [
  {
    path: 'vehiclelist',
    component: VehicleListComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'login',
    component: LoginpageComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'submitvehicle',
    component: SubmitVehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
