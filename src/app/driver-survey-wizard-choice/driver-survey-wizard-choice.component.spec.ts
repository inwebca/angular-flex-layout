import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSurveyWizardChoiceComponent } from './driver-survey-wizard-choice.component';

describe('DriverSurveyWizardChoiceComponent', () => {
  let component: DriverSurveyWizardChoiceComponent;
  let fixture: ComponentFixture<DriverSurveyWizardChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSurveyWizardChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSurveyWizardChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
