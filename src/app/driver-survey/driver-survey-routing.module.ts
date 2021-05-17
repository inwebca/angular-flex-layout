import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverSurveyCardsComponent } from './driver-survey-cards/driver-survey-cards.component';
import { DriverSurveyWizardComponent } from './driver-survey-wizard/driver-survey-wizard.component';

const routes: Routes = [
  { path: 'driver-survey', component: DriverSurveyCardsComponent},
  { path: 'driver-survey/survey-choices/:id', component: DriverSurveyWizardComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DriverSurveyRoutingModule { }

