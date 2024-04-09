import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversApprovedComponent } from './drivers-approved.component';

describe('DriversApprovedComponent', () => {
  let component: DriversApprovedComponent;
  let fixture: ComponentFixture<DriversApprovedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriversApprovedComponent]
    });
    fixture = TestBed.createComponent(DriversApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
