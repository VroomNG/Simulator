import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversPendingComponent } from './drivers-pending.component';

describe('DriversPendingComponent', () => {
  let component: DriversPendingComponent;
  let fixture: ComponentFixture<DriversPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriversPendingComponent]
    });
    fixture = TestBed.createComponent(DriversPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
