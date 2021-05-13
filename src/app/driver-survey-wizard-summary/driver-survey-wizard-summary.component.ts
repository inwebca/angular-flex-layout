import { Component, Input, OnInit } from '@angular/core';import { FormGroup } from '@angular/forms';
import { Step } from 'src/models/survey.model';
;

@Component({
  selector: 'app-driver-survey-wizard-summary',
  templateUrl: './driver-survey-wizard-summary.component.html',
  styleUrls: ['./driver-survey-wizard-summary.component.scss']
})
export class DriverSurveyWizardSummaryComponent implements OnInit {

  @Input() parent: FormGroup;
  @Input() steps: Step[];  constructor() { }

  ngOnInit(): void {
  }
  
}