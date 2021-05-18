import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSurveyWizardDateComponent } from './driver-survey-wizard-date.component';

describe('DriverSurveyWizardDateComponent', () => {
  let component: DriverSurveyWizardDateComponent;
  let fixture: ComponentFixture<DriverSurveyWizardDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSurveyWizardDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSurveyWizardDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
