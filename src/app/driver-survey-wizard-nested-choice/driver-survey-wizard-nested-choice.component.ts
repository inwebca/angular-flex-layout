import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectionListChange } from '@angular/material/list';
import { Answer, NestedAnswer } from 'src/models/survey.model';

@Component({
  selector: 'app-driver-survey-wizard-nested-choice',
  templateUrl: './driver-survey-wizard-nested-choice.component.html',
  styleUrls: ['./driver-survey-wizard-nested-choice.component.scss']
})
export class DriverSurveyWizardNestedChoiceComponent implements OnInit {

  @Input() questionLabel: string;
  @Input() groupName: number;
  @Input() parent: FormGroup;

  public formGroup: FormGroup;
  public displayedAnswers: NestedAnswerExtended[];

  public selectedAnswers: number[];
  public selectedAnswersFormControl : FormControl;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.formGroup = this.parent.get(this.groupName.toString()) as FormGroup;
    this.displayedAnswers = this.formGroup.get('displayedAnswers')?.value as NestedAnswerExtended[];
    this.selectedAnswers = this.formGroup.get('selectedAnswers')?.value as number[];
    this.selectedAnswersFormControl = this.formGroup.get('selectedAnswers') as FormControl;

    this.displayedAnswers.forEach(group => {
      group.answers.forEach(child => {
        child.checked = this.selectedAnswers.some(value => value === child.id)
      })
      const answersId = group.answers.map(x => x.id);
      group.allChecked = answersId.every(x => this.selectedAnswers.includes(x));
      group.indeterminate = group.answers.filter(a => a.checked).length > 0 && !group.allChecked;
    });

  }

  groupCheckboxChange(idGroup: number, checked: boolean){
    const group = this.displayedAnswers.find(x => x.idGroup === idGroup) as NestedAnswerExtended;
    group.allChecked = checked;
    group.answers.forEach(x => x.checked = checked);
    this.cdr.detectChanges();
  }


  updateAllChecked(event: MatSelectionListChange){
    const selectedAnswers = event.source._value as unknown as number[];
    const answerId = event.options[0].value;

    const group = this.displayedAnswers.find(x => x.answers.some(x => x.id == answerId));
    const answer = group.answers.find(x => x.id === answerId);
    const answersId = group.answers.map(x => x.id);

    answer.checked = event.options[0].selected;
    group.allChecked = answersId.every(x => selectedAnswers.includes(x));
    group.indeterminate = group.answers.filter(a => a.checked).length > 0 && !group.allChecked;
  }
}

class NestedAnswerExtended implements NestedAnswer {
  idGroup: number;
  label: string;
  answers: AnswerExtended[];
  showGroupOnly: boolean;
  allChecked: boolean;
  indeterminate: boolean;
}

class AnswerExtended implements Answer {
  id: number;
  label: string;
  priority: number;
  questionType: string;
  checked: boolean;
}