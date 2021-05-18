import { Component, OnInit } from '@angular/core';
import { ISuggestedTrips } from 'src/models/trips.model';
import { DriverTripsEventService } from 'src/services/driver-trips-event.service';

@Component({
  selector: 'app-driver-trips-wizard-trips-priority',
  templateUrl: './driver-trips-wizard-trips-priority.component.html',
  styleUrls: ['./driver-trips-wizard-trips-priority.component.scss']
})
export class DriverTripsWizardTripsPriorityComponent implements OnInit {

  selectedTrips : ISuggestedTripsExtended[];

  constructor(private driverTripsEvents: DriverTripsEventService) { }

  ngOnInit(): void {
    this.driverTripsEvents.updateSelectedTrips$.subscribe((selectedTrips: ISuggestedTrips[]) => {
      const extendedTrip = selectedTrips as ISuggestedTripsExtended[];
      extendedTrip.forEach( (x, index) => x.priority = index + 1);
      this.selectedTrips = extendedTrip;
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
