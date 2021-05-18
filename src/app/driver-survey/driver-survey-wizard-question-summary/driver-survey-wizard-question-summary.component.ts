import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Answer, DateType, IDate, NestedAnswer, QuestionPriority, Step } from 'src/models/survey.model';
import { DriverSurveyEventService } from 'src/services/driver-survey-event.service';

// class SurveyChoices {
//   label: string;
//   groupName: number;
//   answers: Answer[];
//   date: Date;
//   index: number;
// }

class SurveyChoices{
  label: string;
  answer?: any;
  answers?: Answer[] | NestedAnswer[];
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
        case 'Date': {
          const answer = {
            answer: group.get('selectedDate').value,
            label: this.steps.find( x => x.questionId === parseInt(key)).label,
            index: index
          }
          return this.surveyChoices.push(answer);
        }
        case 'Choice': {
          const displayedAnswers = group.get('displayedAnswers')?.value as Answer[];
          const selectedAnswers = group.get('selectedAnswers')?.value as number[];
          const answer = {
              answers:  displayedAnswers.filter(x => selectedAnswers.includes(x.id)),
              label: this.steps.find( x => x.questionId === parseInt(key)).label,
              index: index
          }
          return this.surveyChoices.push(answer);
        }
        case 'NestedChoice': {
          const displayedAnswers = group.get('displayedAnswers')?.value as NestedAnswer[];
          const selectedAnswers = group.get('selectedAnswers')?.value as number[];
          const selectedAnswersArr: Answer[] = displayedAnswers.reduce((currentItem: any[], item: NestedAnswer) => [...currentItem, ...item.answers], []);
          const answer = {
            answers:  selectedAnswersArr.filter(x => selectedAnswers.includes(x.id)),
            label: this.steps.find( x => x.questionId === parseInt(key)).label,
            index: index
          }
          return this.surveyChoices.push(answer);
        }
        default: {
          return null;
        }
      }
    });
  }

  editChoice(stepIndex:number): void {
    this.eventService.navigateToStep(stepIndex);
  }

}
