import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSurveyWizardNestedChoiceComponent } from './driver-survey-wizard-nested-choice.component';

describe('DriverSurveyWizardNestedChoiceComponent', () => {
  let component: DriverSurveyWizardNestedChoiceComponent;
  let fixture: ComponentFixture<DriverSurveyWizardNestedChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSurveyWizardNestedChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSurveyWizardNestedChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
