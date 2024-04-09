import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordOtpComponent } from './forgot-password-otp.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordOtpComponent;
  let fixture: ComponentFixture<ForgotPasswordOtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordOtpComponent]
    });
    fixture = TestBed.createComponent(ForgotPasswordOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
