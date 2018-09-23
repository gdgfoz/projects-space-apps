import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthenticationRoutingModule} from './authentication-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RemindComponent} from './remind/remind.component';
import {ResetComponent} from './reset/reset.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,


    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    RemindComponent,
    ResetComponent
  ]
})
export class AuthenticationModule {
}
