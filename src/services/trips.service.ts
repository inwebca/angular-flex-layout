import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITrips } from 'src/models/trips.model';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  public getTrips() : Observable<ITrips[]> {
    let trips: Array<ITrips> = [
      {
          id: 1,
          title: 'Trips based on survey 1'
      },
      {
          id: 2,
          title: 'Trips based on survey 1'
      }
  ]
  return of(trips);
  }
}
