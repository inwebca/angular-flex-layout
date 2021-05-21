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
  questionsPriority: QuestionPriority[];

  constructor(private eventService: DriverSurveyEventService) { }

  ngOnInit(): void {
    this.questionsPriority = this.setQuestionsPriority();
    this.eventService.changeQuestionPriority(this.questionsPriority);
  }

  setQuestionsPriority(): QuestionPriority[] {
    const questions = this.steps
      .filter(x => x.requiredSequence != null)
      .map(x => ({
        id: x.questionId,
        label: x.label,
        requiredSequence: x.requiredSequence
      }) as QuestionPriority);

    return questions.sort((a, b) => (a.requiredSequence > b.requiredSequence) ? 1 : -1);
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
      x.requiredSequence = arr.findIndex(y => y === x) + 1;
    });
  }

}

