import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InputComponent } from '../../layouts/shared/input/input.component';
import { AlertsComponent } from '../../layouts/shared/alerts/alerts.component';
import { OtpFieldComponent } from '../shared/otp-field/otp-field.component';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ChangePasswordComponent } from 'src/app/pages/change-password/change-password.component';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { ForgotPasswordOtpComponent } from 'src/app/pages/forgot-password-OTP/forgot-password-otp.component';
import { ForgotPasswordUpdateComponent } from 'src/app/pages/forgot-password-update/forgot-password-update.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    InputComponent,
    AlertsComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ForgotPasswordOtpComponent,
    ForgotPasswordUpdateComponent,
    OtpFieldComponent
  ]
})
export class AuthLayoutModule {
  
 }
