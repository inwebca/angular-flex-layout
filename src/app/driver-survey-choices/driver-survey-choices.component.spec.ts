import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSurveyChoicesComponent } from './driver-survey-choices.component';

describe('DriverSurveyChoicesComponent', () => {
  let component: DriverSurveyChoicesComponent;
  let fixture: ComponentFixture<DriverSurveyChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSurveyChoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSurveyChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
