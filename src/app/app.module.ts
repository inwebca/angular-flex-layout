import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DriverSurveyModule } from './driver-survey/driver-survey.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    DriverSurveyModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
