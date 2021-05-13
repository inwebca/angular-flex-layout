import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { QuestionPriority } from 'src/models/survey.model';

@Injectable({
  providedIn: 'root'
})
export class DriverSurveyEventService {

  @Output() navigateToStep$ = new EventEmitter<number>();
  @Output() changeQuestionPriority$ = new EventEmitter<QuestionPriority[]>();

  navigateToStep(stepNumber: number){
    this.navigateToStep$.emit(stepNumber);
  }

  changeQuestionPriority(questionsPriority: QuestionPriority[]){
    this.changeQuestionPriority$.emit(questionsPriority);
  }
}
