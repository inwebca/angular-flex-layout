import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDriverSurvey } from 'src/models/survey.model';
import { SurveyService } from 'src/services/survey.service';


@Component({
  selector: 'app-driver-survey-cards',
  templateUrl: './driver-survey-cards.component.html',
  styleUrls: ['./driver-survey-cards.component.scss']
})
export class DriverSurveyCardsComponent implements OnInit {

  surveys: IDriverSurvey[];

  constructor(
    private surveyService: SurveyService, 
    private router: Router,
    ){}

  ngOnInit(): void{

    this.surveyService.getSurveys().valueChanges.pipe(
      map(result => result.data.driverSurveysSearch)
    ).subscribe(surveys => {
      this.surveys = surveys;
    })
  }

  goToSurvey(surveyId:number){
    this.router.navigate(['/driver-survey/survey-choices', surveyId]);
  }
}
