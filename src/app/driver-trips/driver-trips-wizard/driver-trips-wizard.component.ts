import { Component, OnInit } from '@angular/core';
import { ITrips } from 'src/models/trips.model';

@Component({
  selector: 'app-driver-trips-wizard',
  templateUrl: './driver-trips-wizard.component.html',
  styleUrls: ['./driver-trips-wizard.component.scss']
})
export class DriverTripsWizardComponent implements OnInit {

  trips : ITrips

  constructor() { }

  ngOnInit(): void {
  
  }

}
