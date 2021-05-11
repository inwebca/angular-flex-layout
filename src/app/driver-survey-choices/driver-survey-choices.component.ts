import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { IChoice, IDriverSurvey, INestedChoice, IQuestion, Step } from 'src/models/survey.model';
import { SurveyService } from 'src/services/survey.service';

@Component({
  selector: 'app-driver-survey-choices',
  templateUrl: './driver-survey-choices.component.html',
  styleUrls: ['./driver-survey-choices.component.scss']
})
export class DriverSurveyChoicesComponent implements OnInit, OnDestroy {

  surveyChoices: IDriverSurvey;
  form: FormGroup;

  private readonly destroy$ = new EventEmitter<void>();

  constructor(private route: ActivatedRoute,
    private surveyService: SurveyService,
    private fb: FormBuilder,
    private mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      takeUntil(this.destroy$)
    ).subscribe((param) => {
      const id = param.get('id') ? Number(param.get('id')) : null;
      if (id) {
        this.surveyService.getSurveyChoices(id).subscribe(value => {
          this.surveyChoices = value;
          this.createSteps(value);
          this.createForm(value);
        });
      }
    });
  }

  createSteps(formValues: IDriverSurvey): Step[] {

    const steps = formValues.questions.map(
      question => ({
        questionId: question.id,
        label: question.label,
        questionType: question.questionType,
        questionIsMultiple: question.multipleanswer,
        priority: question.priority,
      } as Step));

    steps.forEach((step, index) => {
      step.index = index;
    });

    return steps;

  }

  createForm(formValues: IDriverSurvey): void {
    this.form = new FormGroup(this.createFormGroups(formValues.questions));
  }

  createFormGroups(questions: IQuestion[]): any {
    const group: any = {};

    questions.forEach(question => {
      switch (question.questionType) {
        case 'Choice': {
          const choice = question as IChoice;
          group[question.id] = this.fb.group({
            selectedAnswers: [choice.selectedAnswers],
            displayedAnswers: [choice.displayedAnswers]
          });
          break;
        }
        case 'NestedChoice': {
          const nestedChoice = question as INestedChoice;
          group[question.id] = this.fb.group({
            selectedAnswers: [nestedChoice.selectedAnswers],
            displayedAnswers: [nestedChoice.displayedAnswers]
          });
          break;
        }
      }
    });
    return group;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}

