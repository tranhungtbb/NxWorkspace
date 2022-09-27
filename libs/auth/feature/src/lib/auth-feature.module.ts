import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { SetupPasswordComponent } from './pages/setup-password/setup-password.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ResetPasswordComponent,
    LoginComponent,
    ForgetPasswordComponent,
    SetupPasswordComponent,
  ],
})
export class AuthFeatureModule {}
