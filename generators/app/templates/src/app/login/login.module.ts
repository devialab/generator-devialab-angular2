import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRouterModule } from './login-router.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  // Components, Pipes, Directive
  declarations: [
    SignInComponent,
    SignUpComponent
  ],

  providers: [],

  // Modules
  imports: [
    CommonModule,
    LoginRouterModule
  ],

  exports: [
    SignInComponent,
    SignUpComponent
  ]
})

export class LoginModule {

}
