import { Component, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { DriverSurveyChoices, IChoice, IDate, IDriverSurvey, INestedChoice, IQuestion, QuestionPriority, Step } from 'src/models/survey.model';
import { DriverSurveyEventService } from 'src/services/driver-survey-event.service';
import { SurveyService } from 'src/services/survey.service';

@Component({
  selector: 'app-driver-survey-choices',
  templateUrl: './driver-survey-wizard.component.html',
  styleUrls: ['./driver-survey-wizard.component.scss']
})
export class DriverSurveyWizardComponent implements OnInit, OnDestroy {

  driverSurvey: IDriverSurvey;
  form: FormGroup;
  steps: Step[];
  questionsPriority: QuestionPriority[];

  private readonly destroy$ = new EventEmitter<void>();

  @ViewChild('stepper') stepper: MatStepper;

  constructor(private route: ActivatedRoute,
    private surveyService: SurveyService,
    private fb: FormBuilder,
    private eventService: DriverSurveyEventService,
    private mediaObserver: MediaObserver) { }

  ngOnInit(): void {

    this.eventService.step.subscribe((stepIndex: number) => {
      this.stepper.selectedIndex = stepIndex;
    });

    this.eventService.questionPriority.subscribe((value: QuestionPriority[]) => {
      this.questionsPriority = value;
    });

    this.route.paramMap.pipe(
      takeUntil(this.destroy$)
    ).subscribe((param) => {
      const id = param.get('id') ? Number(param.get('id')) : null;
      if (id) {
        this.surveyService.getSurveyChoices(id).subscribe(value => {
          this.driverSurvey = value;
          this.steps = this.createSteps(value);
          this.form = this.createForm(value);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
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

  createForm(formValues: IDriverSurvey): FormGroup {
    return new FormGroup(this.createFormGroups(formValues.questions));
  }

  createFormGroups(questions: IQuestion[]): any {
    const group: any = {};

    questions.forEach(question => {
      switch (question.questionType) {
        case 'Date': {
          const choice = question as IDate;
          group[question.id] = this.fb.group({
            selectedDate: new FormControl(choice.date, Validators.required),
            type: 'Date'
          });
          break;
        }
        case 'Choice': {
          const choice = question as IChoice;
          group[question.id] = this.fb.group({
            selectedAnswers: new FormControl(choice.selectedAnswers, Validators.required),
            displayedAnswers: [choice.displayedAnswers],
            type: 'Choice'
          });
          break;
        }
        case 'NestedChoice': {
          const nestedChoice = question as INestedChoice;
          group[question.id] = this.fb.group({
            selectedAnswers: new FormControl(nestedChoice.selectedAnswers, Validators.required),
            displayedAnswers: [nestedChoice.displayedAnswers],
            type: 'NestedChoice'
          });
          break;
        }
      }
    });
    return group;
  }

  submitSurvey() {

    console.log(this.form.valid);

    const driverSurveyChoices = {
      surveyDriverId: this.driverSurvey.surveyDriverId,
      answers: this.getFormValues(),
      questionPriority: this.questionsPriority
    } as DriverSurveyChoices;

    console.log(driverSurveyChoices);
    return false;
  }

  getFormValues(): number[] {

    let selectedAnswersValues: number[] = [];

    Object.keys(this.form.value).forEach(key => {
      const value = this.form.controls[key].get('selectedAnswers')?.value as number[];
      if(value){
        selectedAnswersValues = value.reduce((prev, current) => prev.concat(current), selectedAnswersValues)
      }
    });

    console.log(selectedAnswersValues);
    
    return selectedAnswersValues;
  }
}

