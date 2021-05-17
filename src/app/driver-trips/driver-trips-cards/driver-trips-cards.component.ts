import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ITrips } from 'src/models/trips.model';
import { TripsService } from 'src/services/trips.service';

@Component({
  selector: 'app-driver-trips-cards',
  templateUrl: './driver-trips-cards.component.html',
  styleUrls: ['./driver-trips-cards.component.scss']
})
export class DriverTripsCardsComponent implements OnInit {

  trips$: Observable<ITrips[]>;

  constructor(
    private tripsService: TripsService,
    private router: Router) { }

  ngOnInit(): void {
    this.trips$ = this.tripsService.getTrips();
  }

  goToTrips(tripId:number){
    this.router.navigate(['/driver-trips/trips-choices', tripId]);
  }

}
