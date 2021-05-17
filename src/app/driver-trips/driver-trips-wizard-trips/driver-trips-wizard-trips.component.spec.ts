import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTripsWizardTripsComponent } from './driver-trips-wizard-trips.component';

describe('DriverTripsWizardTripsComponent', () => {
  let component: DriverTripsWizardTripsComponent;
  let fixture: ComponentFixture<DriverTripsWizardTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTripsWizardTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTripsWizardTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
