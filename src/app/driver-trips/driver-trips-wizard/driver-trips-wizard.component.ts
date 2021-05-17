import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-driver-trips-wizard',
  templateUrl: './driver-trips-wizard.component.html',
  styleUrls: ['./driver-trips-wizard.component.scss']
})
export class DriverTripsWizardComponent implements OnInit {

  form: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      
    })
  }

}
