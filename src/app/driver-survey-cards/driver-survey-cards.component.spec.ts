import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSurveyCardsComponent } from './driver-survey-cards.component';

describe('DriverSurveyCardsComponent', () => {
  let component: DriverSurveyCardsComponent;
  let fixture: ComponentFixture<DriverSurveyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSurveyCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSurveyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
