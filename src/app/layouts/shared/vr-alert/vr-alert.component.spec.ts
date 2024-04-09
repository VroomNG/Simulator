import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrAlertComponent } from './vr-alert.component';

describe('VrAlertComponent', () => {
  let component: VrAlertComponent;
  let fixture: ComponentFixture<VrAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VrAlertComponent]
    });
    fixture = TestBed.createComponent(VrAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
