import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISuggestedTrips, ITrips } from 'src/models/trips.model';
import { TripsService } from 'src/services/trips.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DriverTripsDetailsDialog } from '../driver-trips-details/driver-trips-details.component';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { DriverTripsEventService } from 'src/services/driver-trips-event.service';



@Component({
  selector: 'app-driver-trips-wizard-trips',
  templateUrl: './driver-trips-wizard-trips.component.html',
  styleUrls: ['./driver-trips-wizard-trips.component.scss']
})
export class DriverTripsWizardTripsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'destination', 'depthour', 'mileage', 'firstrdv', 'triptype', 'detail'];
  dataSource: MatTableDataSource<ISuggestedTrips>;
  selection: SelectionModel<ISuggestedTrips>;

  constructor(
    private tripsService: TripsService, 
    private tripsEventService: DriverTripsEventService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.tripsService.getSuggestedTrips().subscribe(value => {
      this.dataSource = new MatTableDataSource<ISuggestedTrips>(value);
      this.selection = new SelectionModel<ISuggestedTrips>(true, []);
      this.tripsEventService.updateSelectedTrips([]);
    });

    this.selection.changed.subscribe(value => {
     this.tripsEventService.updateSelectedTrips(value.source.selected);
    })
  }

  showDetail(tripId:number){
   const dialogRef =  this.dialog.open(DriverTripsDetailsDialog, {
      width: "500px",
      data :{ tripId: tripId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
