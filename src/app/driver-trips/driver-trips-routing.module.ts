import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverSurveyWizardComponent } from '../driver-survey/driver-survey-wizard/driver-survey-wizard.component';
import { DriverTripsCardsComponent } from './driver-trips-cards/driver-trips-cards.component';


const routes: Routes = [
  { path: 'driver-trips', component: DriverTripsCardsComponent},
  { path: 'driver-trips/trips-choices/:id', component: DriverSurveyWizardComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverTripsRoutingModule { }
