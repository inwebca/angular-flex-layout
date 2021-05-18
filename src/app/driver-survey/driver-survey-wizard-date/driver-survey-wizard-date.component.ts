import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-driver-survey-wizard-date',
  templateUrl: './driver-survey-wizard-date.component.html',
  styleUrls: ['./driver-survey-wizard-date.component.scss']
})
export class DriverSurveyWizardDateComponent implements OnInit {

  @Input() groupName: number;
  @Input() parent: FormGroup;


  public formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formGroup = this.parent.get(this.groupName.toString()) as FormGroup;
  }

}
