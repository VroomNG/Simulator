import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversEditComponent } from './drivers-edit.component';

describe('DriversEditComponent', () => {
  let component: DriversEditComponent;
  let fixture: ComponentFixture<DriversEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriversEditComponent]
    });
    fixture = TestBed.createComponent(DriversEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
