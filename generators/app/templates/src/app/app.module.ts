import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from 'ng2-translate';
import { TranslateLoader } from 'ng2-translate';
import { TranslateStaticLoader } from 'ng2-translate';

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

// For AoT compiler
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/locales', '.json');
}

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent
  ],

  providers: [],

  // Modules
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      // useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    CoreModule,
    LoginModule,
    HomeModule,
    AppRouterModule
  ],

  // Main Component
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
