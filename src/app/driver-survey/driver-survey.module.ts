import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriverSurveyWizardComponent } from '../driver-survey/driver-survey-wizard/driver-survey-wizard.component';
import { DriverSurveyCardsComponent } from '../driver-survey/driver-survey-cards/driver-survey-cards.component';
import { DriverSurveyWizardChoiceComponent } from '../driver-survey/driver-survey-wizard-choice/driver-survey-wizard-choice.component';
import { DriverSurveyWizardNestedChoiceComponent } from '../driver-survey/driver-survey-wizard-nested-choice/driver-survey-wizard-nested-choice.component';
import { DriverSurveyWizardSummaryComponent } from '../driver-survey/driver-survey-wizard-summary/driver-survey-wizard-summary.component';
import { DriverSurveyWizardQuestionPriorityComponent } from '../driver-survey/driver-survey-wizard-question-priority/driver-survey-wizard-question-priority.component';
import { DriverSurveyWizardQuestionSummaryComponent } from '../driver-survey/driver-survey-wizard-question-summary/driver-survey-wizard-question-summary.component';
import { DriverSurveyRoutingModule } from './driver-survey-routing.module';



@NgModule({
  declarations: [
    DriverSurveyWizardComponent,
    DriverSurveyCardsComponent,
    DriverSurveyWizardChoiceComponent,
    DriverSurveyWizardNestedChoiceComponent,
    DriverSurveyWizardSummaryComponent,
    DriverSurveyWizardQuestionPriorityComponent,
    DriverSurveyWizardQuestionSummaryComponent
  ],
  imports: [
    CommonModule,
    DriverSurveyRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule,
    MatListModule,
    MatFormFieldModule, 
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    FormBuilder
  ]
})
export class DriverSurveyModule { }
