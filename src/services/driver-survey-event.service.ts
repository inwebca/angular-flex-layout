import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverSurveyEventService {

  @Output() navigateToStep$ = new EventEmitter<number>();

  navigateToStep(stepNumber: number){
    this.navigateToStep$.emit(stepNumber);
  }
}
