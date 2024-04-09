import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ChangePasswordComponent } from 'src/app/pages/change-password/change-password.component';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { ForgotPasswordOtpComponent } from 'src/app/pages/forgot-password-OTP/forgot-password-otp.component';
import { ForgotPasswordUpdateComponent } from 'src/app/pages/forgot-password-update/forgot-password-update.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login',  component: LoginComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'forgot-password-otp/:email', component: ForgotPasswordOtpComponent },
    { path: 'forgot-password-update', component: ForgotPasswordUpdateComponent },
];


