import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverTripsRoutingModule } from './driver-trips-routing.module';
import { DriverTripsCardsComponent } from './driver-trips-cards/driver-trips-cards.component';
import { DriverTripsWizardComponent } from './driver-trips-wizard/driver-trips-wizard.component';


@NgModule({
  declarations: [DriverTripsCardsComponent, DriverTripsWizardComponent],
  imports: [
    CommonModule,
    DriverTripsRoutingModule
  ]
})
export class DriverTripsModule { }
