import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatListModule } from "@angular/material/list";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriverSurveyWizardComponent } from './driver-survey-wizard/driver-survey-wizard.component';
import { DriverSurveyTripsComponent } from './driver-survey-trips/driver-survey-trips.component';
import { DriverSurveyCardsComponent } from './driver-survey-cards/driver-survey-cards.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { DriverSurveyWizardChoiceComponent } from './driver-survey-wizard-choice/driver-survey-wizard-choice.component';
import { DriverSurveyWizardNestedChoiceComponent } from './driver-survey-wizard-nested-choice/driver-survey-wizard-nested-choice.component';
import { DriverSurveyWizardSummaryComponent } from './driver-survey-wizard-summary/driver-survey-wizard-summary.component';
import { DriverSurveyWizardQuestionPriorityComponent } from './driver-survey-wizard-question-priority/driver-survey-wizard-question-priority.component';
import { DriverSurveyWizardQuestionSummaryComponent } from './driver-survey-wizard-question-summary/driver-survey-wizard-question-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    DriverSurveyWizardComponent,
    DriverSurveyTripsComponent,
    DriverSurveyCardsComponent,
    DriverSurveyWizardChoiceComponent,
    DriverSurveyWizardNestedChoiceComponent,
    DriverSurveyWizardSummaryComponent,
    DriverSurveyWizardQuestionPriorityComponent,
    DriverSurveyWizardQuestionSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule,
    MatListModule,
    FormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
