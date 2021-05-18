import { Component, OnInit } from '@angular/core';
import { ISuggestedTrips } from 'src/models/trips.model';
import { DriverTripsEventService } from 'src/services/driver-trips-event.service';

@Component({
  selector: 'app-driver-trips-wizard-trips-priority',
  templateUrl: './driver-trips-wizard-trips-priority.component.html',
  styleUrls: ['./driver-trips-wizard-trips-priority.component.scss']
})
export class DriverTripsWizardTripsPriorityComponent implements OnInit {

  selectedTrips : ISuggestedTripsExtended[] = [];

  constructor(private driverTripsEvents: DriverTripsEventService) { }

  ngOnInit(): void {
    this.driverTripsEvents.addTrip$.subscribe((trip: ISuggestedTrips) => {
      const extendedTrip = trip as ISuggestedTripsExtended;

      if(!this.selectedTrips.includes(extendedTrip)){
        this.selectedTrips.push(extendedTrip);
      };
    });


    this.driverTripsEvents.removeTrip$.subscribe((trip: ISuggestedTrips) => {
      const extendedTrip = trip as ISuggestedTripsExtended;

      if(this.selectedTrips.includes(extendedTrip)){
        this.selectedTrips = this.selectedTrips.filter(item => item !== extendedTrip);
      };
    });
  }

}

interface ISuggestedTripsExtended extends ISuggestedTrips {
  priority: number;
}
