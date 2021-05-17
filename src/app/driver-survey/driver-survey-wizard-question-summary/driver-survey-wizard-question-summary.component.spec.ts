import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSurveyWizardQuestionSummaryComponent } from './driver-survey-wizard-question-summary.component';

describe('DriverSurveyWizardQuestionSummaryComponent', () => {
  let component: DriverSurveyWizardQuestionSummaryComponent;
  let fixture: ComponentFixture<DriverSurveyWizardQuestionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSurveyWizardQuestionSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSurveyWizardQuestionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
