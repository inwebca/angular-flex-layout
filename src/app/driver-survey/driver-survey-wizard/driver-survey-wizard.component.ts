import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject, identity, of, Subject, Observable} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {
  DevelopmentAnswer,
  DriverSurveyChoices,
  IChoice,
  IDevelopment,
  IDriverSurvey,
  INestedChoice,
  IQuestion,
  QuestionPriority,
  Step
} from 'src/models/survey.model';
import { DriverSurveyEventService } from 'src/services/driver-survey-event.service';
import {QueryRef} from 'apollo-angular';
import {subscribe} from 'graphql';
import {GetDriverSurveyQuery, GriGraphqlService} from '../../generatedgraphql/graphql-services';
import {DriverSurvey, Question, QuestionType} from '../../generatedgraphql/graphql-types';

@Component({
  selector: 'app-driver-survey-choices',
  templateUrl: './driver-survey-wizard.component.html',
  styleUrls: ['./driver-survey-wizard.component.scss']
})
export class DriverSurveyWizardComponent implements OnInit, OnDestroy {

  survey$: Observable<DriverSurvey>;
  queryRef: QueryRef<GetDriverSurveyQuery>;

  QuestionTypeEnum = QuestionType;
  driverSurvey: DriverSurvey;
  form: FormGroup;
  steps: Step[];
  questionsPriority: QuestionPriority[];

  dataLoaded$ = new BehaviorSubject<boolean>(false);
  private readonly destroy$ = new EventEmitter<void>();


  @ViewChild('stepper') stepper: MatStepper;

  constructor(private route: ActivatedRoute,
              private readonly gql: GriGraphqlService,
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

        this.survey$ = this.gql.getDriverSurvey({surveyDriverId, languageId: 1}).pipe(map(x => x.data.driverSurvey));

        this.survey$.subscribe(value => {
          this.driverSurvey = value;
          this.steps = this.createSteps(this.driverSurvey);
          this.form = this.createForm(this.driverSurvey);
          this.dataLoaded$.next(true);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  createSteps(formValues: DriverSurvey): Step[] {
    const steps = formValues.questions.map(
      question => ({
        questionId: question.id,
        label: question.title,
        requiredSequence: question.requiredSequence,
        questionType: question.questionType
      } as Step));

    steps.forEach((step, index) => {
      step.index = index;
    });

    return steps;
  }

  createForm(formValues: DriverSurvey): FormGroup {
    return new FormGroup(this.createFormGroups(formValues.questions));
  }

  createFormGroups(questions: Question[]): any {
    const group: any = {};

    questions.forEach(question => {

      const questionType = question.questionType.toString();

      switch (questionType) {
        case QuestionType.Development.toString(): {
          const choice = question as IDevelopment;
          group[question.id] = this.fb.group({
            selectedChoice: new FormControl(choice.selectedChoice, Validators.required),
            type: QuestionType.Development,
            dataType: choice.questionDataType
          });
          break;
        }
        case QuestionType.Choice.toString(): {
          const choice = question as IChoice;
          group[question.id] = this.fb.group({
            selectedChoices: new FormControl(choice.selectedChoices, Validators.required),
            displayedChoices: [choice.displayedChoices],
            type: QuestionType.Choice,
            multipleAnswer: choice.multipleAnswer
          });
          break;
        }
        case QuestionType.Nestedchoice: {
          const nestedChoice = question as INestedChoice;
          group[question.id] = this.fb.group({
            selectedChoices: new FormControl(nestedChoice.selectedChoices, Validators.required),
            displayedChoices: [nestedChoice.displayedChoices],
            type: QuestionType.Nestedchoice
          });
          break;
        }
      }
    });
    return group;
  }

  submitSurvey(): void {

    console.log(this.form.valid);
    const driverSurveyChoices = {
      surveyDriverId: this.driverSurvey.surveyDriverId,
      answers: this.getAnswersValues(),
      developmentAnswers: this.getDevelopmentAnswersValues(),
      questionPriority: this.questionsPriority
    } as DriverSurveyChoices;

    console.log(driverSurveyChoices);
  }

  getAnswersValues(): number[] {

    let selectedAnswersValues: number[] = [];

    Object.keys(this.form.value).forEach(key => {
      const value = this.form.controls[key].get('selectedChoices')?.value;
      if (value) {
        selectedAnswersValues = value.reduce((prev, current) => prev.concat(current), selectedAnswersValues);
      }
    });

    console.log(selectedAnswersValues);

    return selectedAnswersValues;
  }

  getDevelopmentAnswersValues(): DevelopmentAnswer[]{

    let selectedDevelopmentAnswersValues: DevelopmentAnswer[] = [];

    Object.keys(this.form.value).forEach(key => {
      const value = this.form.controls[key].get('selectedChoice')?.value as string;
      if (value) {
        const answer: DevelopmentAnswer  = {
          id: Number(key),
          selectedChoice: value,
        };

        selectedDevelopmentAnswersValues = [...selectedDevelopmentAnswersValues, answer];
      }
    });
    return selectedDevelopmentAnswersValues;
  }
}

