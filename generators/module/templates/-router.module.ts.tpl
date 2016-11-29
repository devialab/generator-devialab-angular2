import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

<% if (component) { %>import { <%= camelModuleName %>Component } from './<%= moduleName %>.component';<% } %>

@NgModule({
  imports: [
    RouterModule.forChild([
      <% if (component) { %>{ path: '<%= moduleName %>', component: <%= camelModuleName %>Component }<% } %>
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class <%= camelModuleName %>RouterModule {

}
