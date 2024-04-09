import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VRInputComponent } from './vr-input.component';

describe('VRInputComponent', () => {
  let component: VRInputComponent;
  let fixture: ComponentFixture<VRInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VRInputComponent]
    });
    fixture = TestBed.createComponent(VRInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
