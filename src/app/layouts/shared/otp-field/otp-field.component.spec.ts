import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpFieldComponent } from './otp-field.component';

describe('InputComponent', () => {
  let component: OtpFieldComponent;
  let fixture: ComponentFixture<OtpFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpFieldComponent]
    });
    fixture = TestBed.createComponent(OtpFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
