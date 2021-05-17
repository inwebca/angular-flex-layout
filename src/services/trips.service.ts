import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISuggestedTrips, ITripDetails, ITrips } from 'src/models/trips.model';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  public getTrips(): Observable<ITrips[]> {
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

  public getSuggestedTrips(): Observable<ISuggestedTrips[]> {
    let suggestedTrips: Array<ISuggestedTrips> = [
      {
        id: 1,
        deptHour: '09:h00',
        destination: 'Maine',
        mileage: 300,
        firstRdv: "19 May 11:00",
        tripType: "FT"
      },
      {
        id: 2,
        deptHour: '10:h00',
        destination: 'Maine, New-York',
        mileage: 500,
        firstRdv: "19 May 11:00",
        tripType: "FM - 2"
      },
      {
        id: 3,
        deptHour: '11:h00',
        destination: 'Maine, New-York, Florida',
        mileage: 800,
        firstRdv: "19 May 11:00",
        tripType: "FM - 3"
      }
    ]
    return of(suggestedTrips);
  }

  public getTripDetails(tripId: number): Observable<ITripDetails> {
    let tripDetail: ITripDetails = {
      dangerousGood: true,
      departureDay: "Friday March 12 2021",
      drops: [
        {
          number: 1,
          appointmentTime: "2021-05-13 09:00",
          clientAddress: "170 5E AV ROUGEMONT, QC J0L 1M0 CAN"
        },
        {
          number: 2,
          appointmentTime: "2021-05-14 09:00",
          clientAddress: "95 VULCAN ST ETOBICOKE, ON M9W 1L4 CAN"
        },
        {
          number: 3,
          appointmentTime: "2021-05-15 09:00",
          clientAddress: "4500 RUE HICKMORE SAINT-LAURENT, QC H4T 1K2 CAN"
        }
      ]
    }
    return of(tripDetail);
  }
}
