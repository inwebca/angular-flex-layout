import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Answer, NestedAnswer, Step } from 'src/models/survey.model';

@Component({
  selector: 'app-driver-survey-wizard-summary',
  templateUrl: './driver-survey-wizard-summary.component.html',
  styleUrls: ['./driver-survey-wizard-summary.component.scss']
})
export class DriverSurveyWizardSummaryComponent implements OnInit {

  @Input() parent: FormGroup;
  @Input() steps: Step[];


  surveyChoices: SurveyChoices[];

  constructor() { }

  ngOnInit(): void {
    this.surveyChoices = this.steps.map(x => ({
      label: x.label,
      answers: this.getAnswersFromQuestionId(x.questionId, x.questionType)
    }) as SurveyChoices);
  }

  getAnswersFromQuestionId(questionId: number, questionType: string): Answer[]{
    const group = this.parent.get(questionId.toString()) as FormGroup;
    const displayedAnswers = group.get('displayedAnswers')?.value as Answer[] | NestedAnswer[];
    const selectedAnswers = group.get('selectedAnswers')?.value as number[];

    switch (questionType) {
      case 'Choice': {
        const answersArray = displayedAnswers as Answer[];
        return answersArray.filter(x => selectedAnswers.includes(x.id));
      }
      case 'NestedChoice': {
        const answersArray = displayedAnswers as NestedAnswer[];
        const selectedAnswersArr: Answer[] = answersArray.reduce((currentItem: any[], item: NestedAnswer) => [...currentItem , ...item.answers], []);
        return selectedAnswersArr.filter( x=> selectedAnswers.includes(x.id));
      }
      default: {
        const arr: Answer[] = []
        return arr;
      }
    }
  }

}

class SurveyChoices {
  label: string;
  groupName: number;
  answers: Answer[];
}
