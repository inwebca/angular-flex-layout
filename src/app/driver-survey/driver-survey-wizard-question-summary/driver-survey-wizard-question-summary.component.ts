import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisplayedChoice, NestedDisplayedChoice, QuestionPriority, Step } from 'src/models/survey.model';
import { DriverSurveyEventService } from 'src/services/driver-survey-event.service';
import {QuestionType} from '../../generatedgraphql/graphql-types';

class SurveyChoices{
  label: string;
  answer?: any;
  answers?: DisplayedChoice[] | NestedDisplayedChoice[];
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

  surveyChoices: SurveyChoices[] = [];

  constructor(private eventService: DriverSurveyEventService) { }

  ngOnInit(): void {

    this.createSelectedAnswersTree();

    this.parent.valueChanges.subscribe(_ => {
      this.surveyChoices = [];
      this.createSelectedAnswersTree();
     });

  }

  createSelectedAnswersTree(): void{
    Object.keys(this.parent.value).forEach((key, index) => {
      const group = this.parent.get(key);
      const questionType = group.get('type').value;

      switch(questionType){
        case QuestionType.Development: {
          const answer = {
            answer: group.get('selectedChoice').value,
            label: this.steps.find( x => x.questionId === parseInt(key)).label,
            index: index
          };
          this.surveyChoices = [...this.surveyChoices, answer];
          break;
        }
        case QuestionType.Choice: {
          const displayedChoices = group.get('displayedChoices')?.value as DisplayedChoice[];
          const selectedChoices = group.get('selectedChoices')?.value as number[];
          const answer = {
              answers:  displayedChoices.filter(x => selectedChoices.includes(x.id)),
              label: this.steps.find( x => x.questionId === parseInt(key)).label,
              index: index
          }
          this.surveyChoices = [...this.surveyChoices, answer];
          break;
        }
        case QuestionType.Nestedchoice: {
          const displayedChoices = group.get('displayedChoices')?.value as NestedDisplayedChoice[];
          const selectedChoices = group.get('selectedChoices')?.value as number[];
          const selectedAnswersArr: DisplayedChoice[] = displayedChoices.reduce((currentItem: any[], item: NestedDisplayedChoice) => [...currentItem, ...item.choices], []);
          const answer = {
            answers:  selectedAnswersArr.filter(x => selectedChoices.includes(x.id)),
            label: this.steps.find( x => x.questionId === parseInt(key)).label,
            index: index
          }
          this.surveyChoices = [...this.surveyChoices, answer];
          break;
        }
      }
    });
  }

  editChoice(stepIndex:number): void {
    this.eventService.navigateToStep(stepIndex);
  }

}
