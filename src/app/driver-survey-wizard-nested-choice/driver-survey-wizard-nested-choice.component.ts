import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  constructor() { }

  ngOnInit(): void {
    debugger;
    this.formGroup = this.parent.get(this.groupName.toString()) as FormGroup;
    this.displayedAnswers = this.formGroup.get('displayedAnswers')?.value as NestedAnswerExtended[];
    this.selectedAnswers = this.formGroup.get('selectedAnswers')?.value as number[];


    this.displayedAnswers.forEach(parent => {
      parent.answers.forEach(child => {
        child.checked = this.selectedAnswers.some(value => value === child.id)
      })
    })
  }

  checkAll(idGroup: number, checked: boolean): void {
    const group = this.displayedAnswers.find(x => x.idGroup === idGroup) as NestedAnswerExtended;
    group.allChecked = checked;
    group.answers.forEach(x => x.checked = checked);
    this.updateSelectedValues();
  }

  someChecked(idGroup: number): boolean {
    const group = this.displayedAnswers.find(x => x.idGroup === idGroup) as NestedAnswerExtended;
    return group.answers.filter(a => a.checked).length > 0 && !group.allChecked;
  }

  updateAllChecked(idGroup: number, id: number, checked: boolean): void {
    const group = this.displayedAnswers.find(x => x.idGroup === idGroup) as NestedAnswerExtended;
    const answer = group.answers.find(x => x.id === id) as AnswerExtended;
    answer.checked = checked;
    group.allChecked = group.answers.every(a => a.checked);
    this.updateSelectedValues();
  }

  updateSelectedValues(): void {
    const answersIds: number[][] = this.displayedAnswers.map(x => x.answers.filter(y => y.checked === true).map(z => z.id));
    const ids = answersIds.reduce((currentItem, item) => currentItem.concat(item), []);
    this.formGroup.get('selectedAnswers')?.setValue(ids);
  }
}

class NestedAnswerExtended implements NestedAnswer {
  idGroup: number;
  label: string;
  answers: AnswerExtended[];
  showGroupOnly: boolean;
  allChecked: boolean;
}

class AnswerExtended implements Answer {
  id: number;
  label: string;
  priority: number;
  questionType: string;
  checked: boolean;
}