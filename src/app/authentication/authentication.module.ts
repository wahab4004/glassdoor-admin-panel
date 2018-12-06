import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'request-password',
    component:RequestPasswordComponent
  },
  {
    path:'admin/login/reset-password',
    component:ResetPasswordComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  }
]
@NgModule({
  declarations: [LoginComponent, RequestPasswordComponent, ResetPasswordComponent, LogoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
