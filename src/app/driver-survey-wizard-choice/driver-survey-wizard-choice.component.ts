import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControlName } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';
import { Answer } from 'src/models/survey.model';

@Component({
  selector: 'app-driver-survey-wizard-choice',
  templateUrl: './driver-survey-wizard-choice.component.html',
  styleUrls: ['./driver-survey-wizard-choice.component.scss']
})
export class DriverSurveyWizardChoiceComponent implements OnInit {

  @Input() questionLabel: string;
  @Input() isMultiple: boolean;
  @Input() groupName: number;
  @Input() parent : FormGroup;

  public formGroup: FormGroup;
  public displayedAnswers: Answer[];
  public selectedAnswers: number[];

  constructor() { }

  ngOnInit(): void {
    this.formGroup = this.parent.get(this.groupName.toString()) as FormGroup;
    this.displayedAnswers = this.formGroup.get('displayedAnswers')?.value as Answer[];
    this.selectedAnswers = this.formGroup.get('selectedAnswers')?.value as number[];
  }

  onCheckboxChange(checked: boolean, answerId: number){
    if (checked) {
      this.selectedAnswers.push(answerId);
    } else {
      const index = this.selectedAnswers.indexOf(answerId);
      if (index > -1) {
        this.selectedAnswers.splice(index, 1);
      }
    }
    this.formGroup.get('selectedAnswers')?.setValue(this.selectedAnswers);
  }

  public onRadioButtonChange(control: MatRadioButton): void {
    this.selectedAnswers = [];
    this.selectedAnswers.push(control.value);
    this.formGroup.get('selectedAnswers')?.setValue(this.selectedAnswers);
  }

}
