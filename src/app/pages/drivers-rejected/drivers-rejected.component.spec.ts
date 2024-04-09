import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversRejectedComponent } from './drivers-rejected.component';

describe('DriversRejectedComponent', () => {
  let component: DriversRejectedComponent;
  let fixture: ComponentFixture<DriversRejectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriversRejectedComponent]
    });
    fixture = TestBed.createComponent(DriversRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
