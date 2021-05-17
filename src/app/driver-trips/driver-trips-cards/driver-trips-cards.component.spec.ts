import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTripsCardsComponent } from './driver-trips-cards.component';

describe('DriverTripsCardsComponent', () => {
  let component: DriverTripsCardsComponent;
  let fixture: ComponentFixture<DriverTripsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTripsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTripsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
