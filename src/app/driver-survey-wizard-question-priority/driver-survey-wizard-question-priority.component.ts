import { Component, Input, OnInit } from '@angular/core';
import { QuestionPriority, Step } from 'src/models/survey.model';

@Component({
  selector: 'app-driver-survey-wizard-question-priority',
  templateUrl: './driver-survey-wizard-question-priority.component.html',
  styleUrls: ['./driver-survey-wizard-question-priority.component.scss']
})
export class DriverSurveyWizardQuestionPriorityComponent implements OnInit {

  @Input() steps: Step[];

  questionPriority: QuestionPriority[];

  constructor() { }

  ngOnInit(): void {

    this.questionPriority = this.steps.map(x => ({
      id: x.questionId,
      priority: x.priority,
      label: x.label
    }) as QuestionPriority).sort((a, b) => (a.priority > b.priority) ? 1 : -1);

  }

  reorder(selectedValue: any, up: boolean): void {
    if (selectedValue === null) {
      return;
    }

    const index = this.questionPriority.findIndex(x => x.id === selectedValue.id);
    if (up) {
      if (index === 0) {
        return;
      }
      const temp = this.questionPriority[index - 1];
      this.questionPriority[index - 1] = this.questionPriority[index];
      this.questionPriority[index] = temp;
    } else {
      if (index === this.questionPriority.length - 1) {
        return;
      }
      const temp = this.questionPriority[index + 1];
      this.questionPriority[index + 1] = this.questionPriority[index];
      this.questionPriority[index] = temp;
    }
    this.updateOrderLabel();
    //this.questionsOrder.emit(this.questionsPriority);

  }

  updateOrderLabel(): void {
    const arr = this.questionPriority;
    this.questionPriority.forEach(x => {
      x.priority = arr.findIndex(y => y === x) + 1;
    });
  }

}

