import { group } from '@angular/animations';
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
  public displayedChoices: NestedAnswerExtended[];

  public selectedChoices: number[];
  public selectedChoicesFormControl: FormControl;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.formGroup = this.parent.get(this.groupName.toString()) as FormGroup;
    const displayedChoices = this.formGroup.get('displayedChoices')?.value as NestedAnswer[];
    this.selectedChoices = this.formGroup.get('selectedChoices')?.value as number[];
    this.selectedChoicesFormControl = this.formGroup.get('selectedChoices') as FormControl;

    this.displayedChoices = displayedChoices.map(x => ({
      ...x,
      allChecked: x.answers.map(x => x.id).every(x => this.selectedChoices.includes(x)),
      answers: x.answers.map(y => ({
        ...y,
        checked: this.selectedChoices.some(value => value === y.id)
      })),
    }) as NestedAnswerExtended);

    this.displayedChoices.forEach( group => {
      group.indeterminate = group.answers.filter(a => a.checked).length > 0 && !group.allChecked;
    })

  }

  groupCheckboxChange(idGroup: number, checked: boolean) {
    const group = this.displayedChoices.find(x => x.idGroup === idGroup)
    group.allChecked = checked;
    group.answers.forEach(x => x.checked = checked);
    this.cdr.detectChanges();
  }


  updateAllChecked(event: MatSelectionListChange) {
    const selectedAnswers = event.source._value as unknown as number[];
    const answerId = event.options[0].value;

    const group = this.displayedChoices.find(x => x.answers.some(x => x.id == answerId));
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
  checked: boolean;
}