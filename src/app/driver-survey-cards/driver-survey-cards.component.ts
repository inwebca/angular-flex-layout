import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ISurvey } from 'src/models/survey.model';
import { SurveyService } from 'src/services/survey.service';

@Component({
  selector: 'app-driver-survey-cards',
  templateUrl: './driver-survey-cards.component.html',
  styleUrls: ['./driver-survey-cards.component.scss']
})
export class DriverSurveyCardsComponent implements OnInit {

  surveys$: Observable<ISurvey[]>;

  constructor(
    private surveyService: SurveyService, 
    private route: ActivatedRoute,
    private router: Router,
    ){}

  ngOnInit(): void{
    this.surveys$ = this.surveyService.getSurveys();
  }

  goToSurvey(surveyId:number){
    this.router.navigate(['/survey-choices', surveyId]);
  }
}
