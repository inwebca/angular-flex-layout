import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITripDetails, TripDialogData } from 'src/models/trips.model';
import { TripsService } from 'src/services/trips.service';

@Component({
  selector: 'app-driver-trips-details',
  templateUrl: './driver-trips-details.component.html',
  styleUrls: ['./driver-trips-details.component.scss']
})
export class DriverTripsDetailsDialog {

  details: ITripDetails;

  constructor( 
    private readonly tripsService : TripsService,
    public dialogRef: MatDialogRef<DriverTripsDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: TripDialogData ) { }

    ngOnInit() {
      this.tripsService.getTripDetails(this.data.tripId).subscribe(value => {
        this.details = value;
      });
    }

    close(): void {
      this.dialogRef.close();
    }
  

}
