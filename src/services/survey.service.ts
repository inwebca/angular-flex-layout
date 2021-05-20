import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { DriverSurveyResponse, IChoice, IDate, IDriverSurvey, INestedChoice } from "../models/survey.model";
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';


const GET_SURVEYS = gql`
query {
  driverSurveysSearch {
    surveyDriverId,
    labelDay,
    labelDate
  }
}
`;

@Injectable({
    providedIn: "root"
})

export class SurveyService {

    constructor(private apollo: Apollo) {}

    public getSurveys(): QueryRef<DriverSurveyResponse>  {

      return this.apollo.watchQuery<DriverSurveyResponse>({
        query: GET_SURVEYS
      });


    }

    public getSurveyChoices(id: number): Observable<IDriverSurvey> {

        let surveyChoices: IDriverSurvey = {
            surveyDriverId: id,
            driverEmployeId: 1,
            startDate: '2021-06-01',
            endDate: '2021-07-01',
            label: 'Survey 1',
            hasGrief: false,
            questions: [
                {
                    id: 1,
                    label: 'Day',
                    priority: 4,
                    questionType: 'Date',
                    date: null,
                } as IDate,
                {
                    id: 2,
                    label: 'Hour',
                    multipleanswer: false,
                    priority: 3,
                    questionType: 'Choice',
                    selectedAnswers: [5],
                    displayedAnswers: [{
                        id: 4,
                        label: 'AM',
                        priority: 0
                    }, {
                        id: 5,
                        label: 'PM',
                        priority: 0
                    }, {
                        id: 6,
                        label: 'ALL',
                        priority: 0
                    }]
                } as IChoice,
                {
                    id: 3,
                    label: 'Destination',
                    multipleanswer: true,
                    priority: 1,
                    questionType: 'NestedChoice',
                    selectedAnswers: [11,21,22],
                    displayedAnswers: [{
                      idGroup: 1,
                      label: 'East coast',
                      showGroupOnly: false,
                      answers: [{
                        id: 11,
                        label: 'New-york',
                        priority: 0
                      }, {
                        id: 12,
                        label: 'Maine',
                        priority: 0
                      }]
                    }, {
                      idGroup: 2,
                      label: 'West coast',
                      showGroupOnly: false,
                      answers: [{
                        id: 21,
                        label: 'Texas',
                        priority: 0
                      }, {
                        id: 22,
                        label: 'California',
                        priority: 0
                      }]
                    }]
                  } as INestedChoice,
                  {
                    id: 4,
                    label: 'Distance',
                    multipleanswer: false,
                    priority: 2,
                    questionType: 'Choice',
                    selectedAnswers: [] as unknown,
                    displayedAnswers: [{
                      id: 777,
                      label: '0-499 miles',
                      priority: 0,
                    }, {
                      id: 888,
                      label: '499-999 miles',
                      priority: 0
                    },
                      {
                        id: 999,
                        label: 'Unlimited',
                        priority: 0
                      }]
                  } as IChoice
            ]
        }
        return of(surveyChoices);
    }
}