import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDividerModule } from "@angular/material/divider";
import { MatDialogModule } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";


import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverTripsRoutingModule } from './driver-trips-routing.module';
import { DriverTripsCardsComponent } from './driver-trips-cards/driver-trips-cards.component';
import { DriverTripsWizardComponent } from './driver-trips-wizard/driver-trips-wizard.component';
import { DriverTripsWizardTripsComponent } from './driver-trips-wizard-trips/driver-trips-wizard-trips.component';
import { DriverTripsWizardTripsPriorityComponent } from './driver-trips-wizard-trips-priority/driver-trips-wizard-trips-priority.component';
import { DriverTripsWizardTimerComponent } from './driver-trips-wizard-timer/driver-trips-wizard-timer.component';
import { DriverTripsDetailsDialog } from './driver-trips-details/driver-trips-details.component';


@NgModule({
  declarations: [DriverTripsCardsComponent, DriverTripsWizardComponent, DriverTripsWizardTripsComponent, DriverTripsWizardTripsPriorityComponent, DriverTripsWizardTimerComponent, DriverTripsDetailsDialog],
  imports: [
    CommonModule,
    DriverTripsRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    FormBuilder
  ],
  entryComponents: [
    DriverTripsDetailsDialog
  ]
})
export class DriverTripsModule { }
