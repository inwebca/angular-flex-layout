import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverSurveyCardsComponent } from './driver-survey/driver-survey-cards/driver-survey-cards.component';

const routes: Routes = [
  { path: '', component: DriverSurveyCardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
