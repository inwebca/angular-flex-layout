import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DriverSurveyCardsComponent } from './driver-survey-cards/driver-survey-cards.component';
import { DriverSurveyWizardComponent } from './driver-survey-wizard/driver-survey-wizard.component';
import { DriverSurveyTripsComponent } from './driver-survey-trips/driver-survey-trips.component';

const routes: Routes = [
  { path: 'survey-choices/:id', component: DriverSurveyWizardComponent },
  { path: 'trips-component', component: DriverSurveyTripsComponent },
  { path: '', component: DriverSurveyCardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
