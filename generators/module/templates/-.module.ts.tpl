<% if (description) { %>// <%= description %> <% } %>

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
<% if (router) { %>import { <%= camelModuleName %>RouterModule } from './<%= moduleName %>-router.module';<% } %>
<% if (component) { %>import { <%= camelModuleName %>Component } from './<%= moduleName %>.component';<% } %>

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    <% if (component) { %><%= camelModuleName %>Component<% } %>
  ],

  providers: [],

  // Modules
  imports: [
    CommonModule,
    SharedModule<% if (router) { %>,
    <%= camelModuleName %>RouterModule<% } %>
  ],

  exports: [
    <% if (component) { %><%= camelModuleName %>Component<% } %>
  ]
})

export class <%= camelModuleName %>Module {

}
