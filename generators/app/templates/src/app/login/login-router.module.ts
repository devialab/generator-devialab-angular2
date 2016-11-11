import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: SignInComponent },
      { path: 'register', component: SignUpComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class LoginRouterModule {

}
