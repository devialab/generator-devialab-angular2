import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: AppComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouterModule {

}
