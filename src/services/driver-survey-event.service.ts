import { EventEmitter, Injectable, OnDestroy, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { QuestionPriority } from 'src/models/survey.model';

@Injectable({
  providedIn: 'root'
})
export class DriverSurveyEventService implements OnDestroy{

  private step$ = new Subject<number>();
  private questionPriority$ = new Subject<QuestionPriority[]>();

  navigateToStep(stepNumber: number){
    this.step$.next(stepNumber);
  }

  get step(): Observable<number>{
    return this.step$.asObservable();
  }

  changeQuestionPriority(questionsPriority: QuestionPriority[]){
    this.questionPriority$.next(questionsPriority);
  }

  get questionPriority() {
    return this.questionPriority$.asObservable();
  }

  ngOnDestroy(): void{
    this.step$.unsubscribe();
    this.questionPriority$.unsubscribe();
  }
}
