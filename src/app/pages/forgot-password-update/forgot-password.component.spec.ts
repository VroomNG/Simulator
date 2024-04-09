import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordUpdateComponent } from './forgot-password-update.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordUpdateComponent;
  let fixture: ComponentFixture<ForgotPasswordUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordUpdateComponent]
    });
    fixture = TestBed.createComponent(ForgotPasswordUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
