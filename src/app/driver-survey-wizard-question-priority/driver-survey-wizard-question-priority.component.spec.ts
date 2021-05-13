import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSurveyWizardQuestionPriorityComponent } from './driver-survey-wizard-question-priority.component';

describe('DriverSurveyWizardQuestionPriorityComponent', () => {
  let component: DriverSurveyWizardQuestionPriorityComponent;
  let fixture: ComponentFixture<DriverSurveyWizardQuestionPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSurveyWizardQuestionPriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSurveyWizardQuestionPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
