import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSurveyWizardComponent } from './driver-survey-wizard.component';

describe('DriverSurveyChoicesComponent', () => {
  let component: DriverSurveyWizardComponent;
  let fixture: ComponentFixture<DriverSurveyWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSurveyWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSurveyWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
