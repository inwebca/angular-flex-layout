import { Component, Input, OnInit } from '@angular/core';
import { QuestionPriority, Step } from 'src/models/survey.model';
import { DriverSurveyEventService } from 'src/services/driver-survey-event.service';

@Component({
  selector: 'app-driver-survey-wizard-question-priority',
  templateUrl: './driver-survey-wizard-question-priority.component.html',
  styleUrls: ['./driver-survey-wizard-question-priority.component.scss']
})
export class DriverSurveyWizardQuestionPriorityComponent implements OnInit {

  @Input() steps: Step[];
  @Input() questionsPriority: QuestionPriority[];

  constructor(private eventService: DriverSurveyEventService) { }

  ngOnInit(): void {

  }

  reorder(selectedValue: any, up: boolean): void {
    if (selectedValue === null) {
      return;
    }

    const index = this.questionsPriority.findIndex(x => x.id === selectedValue.id);
    if (up) {
      if (index === 0) {
        return;
      }
      const temp = this.questionsPriority[index - 1];
      this.questionsPriority[index - 1] = this.questionsPriority[index];
      this.questionsPriority[index] = temp;
    } else {
      if (index === this.questionsPriority.length - 1) {
        return;
      }
      const temp = this.questionsPriority[index + 1];
      this.questionsPriority[index + 1] = this.questionsPriority[index];
      this.questionsPriority[index] = temp;
    }
    this.updateOrderLabel();
    this.eventService.changeQuestionPriority(this.questionsPriority);
  }

  updateOrderLabel(): void {
    const arr = this.questionsPriority;
    this.questionsPriority.forEach(x => {
      x.priority = arr.findIndex(y => y === x) + 1;
    });
  }

}

