import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { Observable } from '@apollo/client/utilities/observables/Observable';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DriverSurveyChoices, IChoice, IDevelopment, IDriverSurvey, INestedChoice, IQuestion, QuestionPriority, QuestionType, Step } from 'src/models/survey.model';
import { DriverSurveyEventService } from 'src/services/driver-survey-event.service';
import { SurveyService } from 'src/services/survey.service';

@Component({
  selector: 'app-driver-survey-choices',
  templateUrl: './driver-survey-wizard.component.html',
  styleUrls: ['./driver-survey-wizard.component.scss']
})
export class DriverSurveyWizardComponent implements OnInit, OnDestroy {
  QuestionTypeEnum = QuestionType;
  driverSurvey: IDriverSurvey;
  form: FormGroup;
  steps: Step[];
  questionsPriority: QuestionPriority[];

  dataLoaded$ = new BehaviorSubject<boolean>(false);
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
      const surveyDriverId = param.get('id') ? Number(param.get('id')) : null;
      if (surveyDriverId) {
        this.surveyService.getSurvey(surveyDriverId, 1).valueChanges.subscribe(value => {
          this.driverSurvey = value.data.driverSurvey;
          this.steps = this.createSteps(this.driverSurvey);
          this.form = this.createForm(this.driverSurvey);
          this.dataLoaded$.next(true);
        })
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
        requiredSequence: question.requiredSequence,
        questionType: question.questionType,
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

      const questionType = question.questionType.toString();

      switch (questionType) {
        case QuestionType.DEVELOPMENT.toString(): {
          const choice = question as IDevelopment;
          group[question.id] = this.fb.group({
            selectedChoice: new FormControl(choice.selectedChoice, Validators.required),
            type: QuestionType.DEVELOPMENT,
            dataType: choice.questionDataType
          });
          break;
        }
        case QuestionType.CHOICE.toString(): {
          const choice = question as IChoice;
          group[question.id] = this.fb.group({
            selectedChoices: new FormControl(choice.selectedChoices, Validators.required),
            displayedChoices: [choice.displayedChoices],
            type: QuestionType.CHOICE,
            multipleAnswer: choice.mulipleAnswer
          });
          break;
        }
        case QuestionType.NESTEDCHOICE: {
          const nestedChoice = question as INestedChoice;
          group[question.id] = this.fb.group({
            selectedChoices: new FormControl(nestedChoice.selectedChoices, Validators.required),
            displayedChoices: [nestedChoice.displayedChoices],
            type: QuestionType.NESTEDCHOICE
          });
          break;
        }
      }


      // switch (question.questionType) {
      //   // case QuestionType.DEVELOPMENT: {
      //   //   const choice = question as IDevelopment;
      //   //   group[question.id] = this.fb.group({
      //   //     selectedDate: new FormControl(choice.date, Validators.required),
      //   //     type: 'Date'
      //   //   });
      //   //   break;
      //   // }
      //   case QuestionType.CHOICE.toString(): {
      //     const choice = question as IChoice;
      //     group[question.id] = this.fb.group({
      //       selectedAnswers: new FormControl(choice.selectedChoices, Validators.required),
      //       displayedAnswers: [choice.displayedChoices],
      //       type: QuestionType.CHOICE
      //     });
      //     break;
      //   }
      //   case QuestionType.NESTEDCHOICE: {
      //     const nestedChoice = question as INestedChoice;
      //     group[question.id] = this.fb.group({
      //       selectedAnswers: new FormControl(nestedChoice.selectedChoices, Validators.required),
      //       displayedAnswers: [nestedChoice.displayedChoices],
      //       type: QuestionType.NESTEDCHOICE
      //     });
      //     break;
      //   }
      // }
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
      if (value) {
        selectedAnswersValues = value.reduce((prev, current) => prev.concat(current), selectedAnswersValues)
      }
    });

    console.log(selectedAnswersValues);

    return selectedAnswersValues;
  }
}

