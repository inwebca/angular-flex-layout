import { EventEmitter, Injectable, Output } from '@angular/core';
import { ISuggestedTrips, ITrips } from 'src/models/trips.model';

@Injectable({
  providedIn: 'root'
})
export class DriverTripsEventService {

  @Output() updateSelectedTrips$ = new EventEmitter<ISuggestedTrips[]>();

  updateSelectedTrips(selectedTrips: ISuggestedTrips[]){
    this.updateSelectedTrips$.emit(selectedTrips);
  }
}
