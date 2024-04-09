import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsUpcomingComponent } from './trips-upcoming.component';

describe('TripsUpcomingComponent', () => {
  let component: TripsUpcomingComponent;
  let fixture: ComponentFixture<TripsUpcomingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripsUpcomingComponent]
    });
    fixture = TestBed.createComponent(TripsUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
