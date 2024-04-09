import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsPastComponent } from './trips-past.component';

describe('TripsPastComponent', () => {
  let component: TripsPastComponent;
  let fixture: ComponentFixture<TripsPastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripsPastComponent]
    });
    fixture = TestBed.createComponent(TripsPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
