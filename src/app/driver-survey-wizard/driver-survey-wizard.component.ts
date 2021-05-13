import { Component, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { DriverSurveyChoices, IChoice, IDriverSurvey, INestedChoice, IQuestion, QuestionPriority, Step } from 'src/models/survey.model';
import { DriverSurveyEventService } from 'src/services/driver-survey-event.service';
import { SurveyService } from 'src/services/survey.service';

@Component({
  selector: 'app-driver-survey-choices',
  templateUrl: './driver-survey-wizard.component.html',
  styleUrls: ['./driver-survey-wizard.component.scss']
})
export class DriverSurveyWizardComponent implements OnInit, OnDestroy {

  surveyChoices: IDriverSurvey;
  form: FormGroup;
  steps: Step[];

  private readonly destroy$ = new EventEmitter<void>();

  @ViewChild('stepper') stepper: MatStepper;

  constructor(private route: ActivatedRoute,
    private surveyService: SurveyService,
    private fb: FormBuilder,
    private eventService: DriverSurveyEventService,
    private mediaObserver: MediaObserver) { }

  ngOnInit(): void {

    this.eventService.navigateToStep$.subscribe((stepIndex: number) => {
      this.stepper.selectedIndex = stepIndex;
    })

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

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  createSteps(formValues: IDriverSurvey): void {

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

    this.steps = steps;

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

  submitSurvey(){
    console.log(this.form.value);
  }

  navigateToStep(stepIndex: number, stepper: MatStepper): void {
    stepper.selectedIndex = stepIndex;
  }
}

