import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSurveyWizardSummaryComponent } from './driver-survey-wizard-summary.component';

describe('DriverSurveyWizardSummaryComponent', () => {
  let component: DriverSurveyWizardSummaryComponent;
  let fixture: ComponentFixture<DriverSurveyWizardSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSurveyWizardSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSurveyWizardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
