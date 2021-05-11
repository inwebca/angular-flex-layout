import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriverSurveyChoicesComponent } from './driver-survey-choices/driver-survey-choices.component';
import { DriverSurveyTripsComponent } from './driver-survey-trips/driver-survey-trips.component';
import { DriverSurveyCardsComponent } from './driver-survey-cards/driver-survey-cards.component';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DriverSurveyChoicesComponent,
    DriverSurveyTripsComponent,
    DriverSurveyCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
