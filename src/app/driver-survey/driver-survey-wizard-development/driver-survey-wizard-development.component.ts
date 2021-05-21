import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {QuestionDataType} from '../../../models/survey.model';

@Component({
  selector: 'app-driver-survey-wizard-development',
  templateUrl: './driver-survey-wizard-development.component.html',
  styleUrls: ['./driver-survey-wizard-development.component.scss']
})
export class DriverSurveyWizardDevelopmentComponent implements OnInit {

  @Input() groupName: number;
  @Input() parent: FormGroup;
  @Input() questionLabel: string;

  public formGroup: FormGroup;
  public dataType: QuestionDataType;
  public readonly dataTypeEnum = QuestionDataType;
  public selectedChoice: any;

  constructor() { }

  ngOnInit(): void {
    this.formGroup = this.parent.get(this.groupName.toString()) as FormGroup;
    this.dataType = this.formGroup.get('dataType').value as QuestionDataType;

    const selectedChoice = this.formGroup.get('selectedChoice').value;


    switch(this.dataType){
      case this.dataTypeEnum.DATE: {

        this.selectedChoice = new Date(selectedChoice);
        break;
      }
    }
  }

}
