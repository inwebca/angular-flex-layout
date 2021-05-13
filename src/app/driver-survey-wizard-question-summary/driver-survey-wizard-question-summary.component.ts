import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Answer, NestedAnswer, Step } from 'src/models/survey.model';
import { DriverSurveyEventService } from 'src/services/driver-survey-event.service';

class SurveyChoices {
  label: string;
  groupName: number;
  answers: Answer[];
  index: number;
}


@Component({
  selector: 'app-driver-survey-wizard-question-summary',
  templateUrl: './driver-survey-wizard-question-summary.component.html',
  styleUrls: ['./driver-survey-wizard-question-summary.component.scss']
})

export class DriverSurveyWizardQuestionSummaryComponent implements OnInit {

  @Input() parent: FormGroup;
  @Input() steps: Step[];

  surveyChoices: SurveyChoices[];

  constructor(private eventService: DriverSurveyEventService) { }

  ngOnInit(): void {

    this.createSurveyChoicesArray();

    this.parent.valueChanges.subscribe(_ => {
      this.createSurveyChoicesArray();
    })

  }

  createSurveyChoicesArray() {
    this.surveyChoices = this.steps.map(x => ({
      label: x.label,
      answers: this.getAnswersFromQuestionId(x.questionId, x.questionType),
      index: x.index
    }) as SurveyChoices);
  }

  getAnswersFromQuestionId(questionId: number, questionType: string): Answer[] {
    const group = this.parent.get(questionId.toString()) as FormGroup;
    const displayedAnswers = group.get('displayedAnswers')?.value as Answer[] | NestedAnswer[];
    const selectedAnswers = group.get('selectedAnswers')?.value as number[];
    const arr: Answer[] = [];

    switch (questionType) {
      case 'Choice': {
        const answersArray = displayedAnswers as Answer[];
        return answersArray.filter(x => selectedAnswers.includes(x.id));
      }
      case 'NestedChoice': {
        const answersArray = displayedAnswers as NestedAnswer[];
        const selectedAnswersArr: Answer[] = answersArray.reduce((currentItem: any[], item: NestedAnswer) => [...currentItem, ...item.answers], []);
        return selectedAnswersArr.filter(x => selectedAnswers.includes(x.id));
      }
      default: {
        return arr;
      }
    }
  }

  editChoice(stepIndex:number): void {
    this.eventService.navigateToStep(stepIndex);
  }

}
