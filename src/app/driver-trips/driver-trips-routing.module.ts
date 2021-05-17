import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverTripsCardsComponent } from './driver-trips-cards/driver-trips-cards.component';
import { DriverTripsWizardComponent } from './driver-trips-wizard/driver-trips-wizard.component';


const routes: Routes = [
  { path: 'driver-trips', component: DriverTripsCardsComponent},
  { path: 'driver-trips/trips-choices/:id', component: DriverTripsWizardComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverTripsRoutingModule { }
