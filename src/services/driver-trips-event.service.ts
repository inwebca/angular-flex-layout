import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISuggestedTrips } from 'src/models/trips.model';

@Injectable({
  providedIn: 'root'
})
export class DriverTripsEventService implements OnDestroy {

  private trips$ = new BehaviorSubject<ISuggestedTrips[]>([]);

  updateSelectedTrips(selectedTrips: ISuggestedTrips[]){
    this.trips$.next(selectedTrips);
  }

  get trips(): Observable<ISuggestedTrips[]>{
    return this.trips$.asObservable();
  }

  ngOnDestroy() {
    this.trips$.unsubscribe();
  }
}
