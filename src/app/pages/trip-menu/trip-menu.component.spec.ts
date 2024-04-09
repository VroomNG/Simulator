import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripMenuComponent } from './trip-menu.component';

describe('TripMenuComponent', () => {
  let component: TripMenuComponent;
  let fixture: ComponentFixture<TripMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripMenuComponent]
    });
    fixture = TestBed.createComponent(TripMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
