import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTripsDetailsDialog } from './driver-trips-details.component';

describe('DriverTripsDetailsDialog', () => {
  let component: DriverTripsDetailsDialog;
  let fixture: ComponentFixture<DriverTripsDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTripsDetailsDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTripsDetailsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
