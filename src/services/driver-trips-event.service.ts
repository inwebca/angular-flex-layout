import { EventEmitter, Injectable, Output } from '@angular/core';
import { ISuggestedTrips, ITrips } from 'src/models/trips.model';

@Injectable({
  providedIn: 'root'
})
export class DriverTripsEventService {

  @Output() addTrip$ = new EventEmitter<ISuggestedTrips>();
  @Output() removeTrip$ = new EventEmitter<ISuggestedTrips>();

  addTrip(selectedTrip: ISuggestedTrips){
    this.addTrip$.emit(selectedTrip);
  }

  removeTrip(selectedTrip: ISuggestedTrips){
    this.removeTrip$.emit(selectedTrip);
  }
}
