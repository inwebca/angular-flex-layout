import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTripsWizardTripsPriorityComponent } from './driver-trips-wizard-trips-priority.component';

describe('DriverTripsWizardTripsPriorityComponent', () => {
  let component: DriverTripsWizardTripsPriorityComponent;
  let fixture: ComponentFixture<DriverTripsWizardTripsPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTripsWizardTripsPriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTripsWizardTripsPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
