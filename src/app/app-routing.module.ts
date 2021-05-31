import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverSurveyCardsComponent } from './driver-survey/driver-survey-cards/driver-survey-cards.component';
import {RouteGuard} from './route.guard';

const routes: Routes = [
  { path: '', component: DriverSurveyCardsComponent, canActivate: [RouteGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
