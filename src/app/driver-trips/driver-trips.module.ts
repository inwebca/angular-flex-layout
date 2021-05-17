import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

import { DriverTripsRoutingModule } from './driver-trips-routing.module';
import { DriverTripsCardsComponent } from './driver-trips-cards/driver-trips-cards.component';
import { DriverTripsWizardComponent } from './driver-trips-wizard/driver-trips-wizard.component';


@NgModule({
  declarations: [DriverTripsCardsComponent, DriverTripsWizardComponent],
  imports: [
    CommonModule,
    DriverTripsRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DriverTripsModule { }
