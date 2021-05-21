import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {QueryRef} from 'apollo-angular';
import { GetDriverSurveysQuery, GriGraphqlService} from '../../generatedgraphql/graphql-services';
import {DriverSurvey} from '../../generatedgraphql/graphql-types';

@Component({
  selector: 'app-driver-survey-cards',
  templateUrl: './driver-survey-cards.component.html',
  styleUrls: ['./driver-survey-cards.component.scss']
})
export class DriverSurveyCardsComponent implements OnInit {

  surveys: DriverSurvey[];
  surveysObs$: Observable<DriverSurvey[]>;
  queryRef: QueryRef<GetDriverSurveysQuery>;

  constructor(
    private router: Router,
    private readonly gql: GriGraphqlService
    ){}

  ngOnInit(): void{
    this.surveysObs$ = this.gql.getDriverSurveys().pipe(map(value => value.data.driverSurveysSearch));

    this.surveysObs$.subscribe(value => {
      this.surveys = value;
    });
  }

  goToSurvey(surveyId: number): void{
    this.router.navigate(['/driver-survey/survey-choices', surveyId]);
  }
}
