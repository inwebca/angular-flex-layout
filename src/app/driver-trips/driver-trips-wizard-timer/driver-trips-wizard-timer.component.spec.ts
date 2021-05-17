import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTripsWizardTimerComponent } from './driver-trips-wizard-timer.component';

describe('DriverTripsWizardTimerComponent', () => {
  let component: DriverTripsWizardTimerComponent;
  let fixture: ComponentFixture<DriverTripsWizardTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTripsWizardTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTripsWizardTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
