import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from '../util/header/header.component';
import { AuthComponent } from './auth.component';
import { SideNavComponent } from '../util/side-nav/side-nav.component';
import { DashboardModule } from '../dashboard/dashboard.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthComponent,
    // HeaderComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, DashboardModule
  ]
})
export class AuthModule { }
