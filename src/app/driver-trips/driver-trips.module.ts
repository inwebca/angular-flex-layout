import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";


import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverTripsRoutingModule } from './driver-trips-routing.module';
import { DriverTripsCardsComponent } from './driver-trips-cards/driver-trips-cards.component';
import { DriverTripsWizardComponent } from './driver-trips-wizard/driver-trips-wizard.component';
import { DriverTripsWizardTripsComponent } from './driver-trips-wizard-trips/driver-trips-wizard-trips.component';
import { DriverTripsWizardTripsPriorityComponent } from './driver-trips-wizard-trips-priority/driver-trips-wizard-trips-priority.component';
import { DriverTripsWizardTimerComponent } from './driver-trips-wizard-timer/driver-trips-wizard-timer.component';


@NgModule({
  declarations: [DriverTripsCardsComponent, DriverTripsWizardComponent, DriverTripsWizardTripsComponent, DriverTripsWizardTripsPriorityComponent, DriverTripsWizardTimerComponent],
  imports: [
    CommonModule,
    DriverTripsRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    FormBuilder
  ]
})
export class DriverTripsModule { }
