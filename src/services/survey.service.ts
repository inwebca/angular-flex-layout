import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Answer, IChoice, IDriverSurvey, INestedChoice, IQuestion, ISurvey } from "../models/survey.model";

@Injectable({
    providedIn: "root"
})

export class SurveyService {
    public getSurveys(): Observable<ISurvey[]> {
        let surveys: Array<ISurvey> = [
            {
                id: 1,
                date: 'From March 12 to March 14 2021',
                days: 'Saturday to Monday'
            },
            {
                id: 2,
                date: 'From June 12 to June 14 2021',
                days: 'Saturday to Monday'
            },
            {
                id: 3,
                date: 'From June 12 to June 14 2021',
                days: 'Saturday to Monday'
            }
        ]
        return of(surveys);
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
                    multipleanswer: true,
                    priority: 4,
                    questionType: 'Choice',
                    selectedAnswers: [1],
                    displayedAnswers: [{
                        id: 1,
                        label: 'Friday 12 March',
                        priority: 0
                    }, {
                        id: 2,
                        label: 'Saturday 13 March',
                        priority: 0
                    }, {
                        id: 3,
                        label: 'Sunday 14 March',
                        priority: 0
                    }]
                } as IChoice,
                {
                    id: 2,
                    label: 'Hour',
                    multipleanswer: false,
                    priority: 3,
                    questionType: 'Choice',
                    selectedAnswers: [] as unknown,
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
                    selectedAnswers: [12, 21],
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