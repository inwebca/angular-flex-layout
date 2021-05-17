import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTripsWizardComponent } from './driver-trips-wizard.component';

describe('DriverTripsWizardComponent', () => {
  let component: DriverTripsWizardComponent;
  let fixture: ComponentFixture<DriverTripsWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTripsWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTripsWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
