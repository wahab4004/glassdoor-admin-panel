import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from './ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './authentication/login/login.component';
import { RequestPasswordComponent } from './authentication/request-password/request-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { GuestGuard } from './guard/guest.guard';
import { AuthenticationModule } from './authentication/authentication.module';

const routes : Routes = [
  {
    path:'',
    loadChildren:'./main/main.module#MainModule'
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path:'request-password',
    component:RequestPasswordComponent,
    canActivate: [GuestGuard]
  },
  {
    path:'reset-password',
    component:ResetPasswordComponent,
    canActivate: [GuestGuard]
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    HttpClientModule,
    AuthenticationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
