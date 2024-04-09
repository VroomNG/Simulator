import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversAddComponent } from './drivers-add.component';

describe('DriversAddComponent', () => {
  let component: DriversAddComponent;
  let fixture: ComponentFixture<DriversAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriversAddComponent]
    });
    fixture = TestBed.createComponent(DriversAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
