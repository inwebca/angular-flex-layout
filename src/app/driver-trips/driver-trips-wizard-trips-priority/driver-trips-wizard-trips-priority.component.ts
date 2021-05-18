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
        extendedTrip.priority = this.selectedTrips.length + 1;
        this.selectedTrips.push(extendedTrip);
      };
    });


    this.driverTripsEvents.removeTrip$.subscribe((trip: ISuggestedTrips) => {
      const extendedTrip = trip as ISuggestedTripsExtended;

      if(this.selectedTrips.includes(extendedTrip)){
        this.selectedTrips = this.selectedTrips.filter(item => item !== extendedTrip);
        this.selectedTrips.forEach( (x, index) => {
          x.priority = index + 1;
        })
      };
    });
  }

  reorder(selectedValue: any, up: boolean): void {
    if (selectedValue === null) {
      return;
    }
    const index = this.selectedTrips.findIndex(x => x.id === selectedValue.id);
    if (up) {
      if (index === 0) {
        return;
      }
      const temp = this.selectedTrips[index - 1];
      this.selectedTrips[index - 1] = this.selectedTrips[index];
      this.selectedTrips[index] = temp;
    } else {
      if (index === this.selectedTrips.length - 1) {
        return;
      }
      const temp = this.selectedTrips[index + 1];
      this.selectedTrips[index + 1] = this.selectedTrips[index];
      this.selectedTrips[index] = temp;
    }
    this.updateOrderLabel();
    // this.eventService.changeQuestionPriority(this.questionsPriority);
  }

  updateOrderLabel(): void {
    const arr = this.selectedTrips;
    this.selectedTrips.forEach(x => {
      x.priority = arr.findIndex(y => y === x) + 1;
    });
  }

}

interface ISuggestedTripsExtended extends ISuggestedTrips {
  priority: number;
}
