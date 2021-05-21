import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';
import { DisplayedChoice } from 'src/models/survey.model';
import { MatFormFieldControl } from "@angular/material/form-field";

@Component({
  selector: 'app-driver-survey-wizard-choice',
  templateUrl: './driver-survey-wizard-choice.component.html',
  styleUrls: ['./driver-survey-wizard-choice.component.scss']
})
export class DriverSurveyWizardChoiceComponent implements OnInit {

  @Input() questionLabel: string;
  @Input() groupName: number;
  @Input() parent : FormGroup;

  public formGroup: FormGroup;
  public displayedChoices: DisplayedChoice[];
  public selectedChoices: number[];
  public isMultiple: boolean;
  public selectedChoicesFormControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.formGroup = this.parent.get(this.groupName.toString()) as FormGroup;
    this.displayedChoices = this.formGroup.get('displayedChoices')?.value as DisplayedChoice[];
    this.selectedChoices = this.formGroup.get('selectedChoices')?.value as number[];
    this.isMultiple = this.formGroup.get('multipleAnswer')?.value as boolean;
    this.selectedChoicesFormControl = this.formGroup.get('selectedChoices') as FormControl;
  }
}
