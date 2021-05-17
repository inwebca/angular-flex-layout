import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSurveyTripsComponent } from './driver-survey-trips.component';

describe('DriverSurveyTripsComponent', () => {
  let component: DriverSurveyTripsComponent;
  let fixture: ComponentFixture<DriverSurveyTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSurveyTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSurveyTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
