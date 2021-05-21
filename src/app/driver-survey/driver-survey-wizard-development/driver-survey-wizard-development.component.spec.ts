import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSurveyWizardDevelopmentComponent } from './driver-survey-wizard-development.component';

describe('DriverSurveyWizardDateComponent', () => {
  let component: DriverSurveyWizardDevelopmentComponent;
  let fixture: ComponentFixture<DriverSurveyWizardDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSurveyWizardDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSurveyWizardDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
