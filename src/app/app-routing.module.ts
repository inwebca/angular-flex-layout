import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DriverSurveyCardsComponent } from './driver-survey-cards/driver-survey-cards.component';
import { DriverSurveyChoicesComponent } from './driver-survey-choices/driver-survey-choices.component';
import { DriverSurveyTripsComponent } from './driver-survey-trips/driver-survey-trips.component';

const routes: Routes = [
  { path: 'survey-choices/:id', component: DriverSurveyChoicesComponent },
  { path: 'trips-component', component: DriverSurveyTripsComponent },
  { path: '', component: DriverSurveyCardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
