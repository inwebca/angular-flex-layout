import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { ISurvey} from "../models/survey.model";

@Injectable({
    providedIn: "root"
})

export class SurveyService{
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
}