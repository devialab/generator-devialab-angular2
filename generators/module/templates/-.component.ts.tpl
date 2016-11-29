import { Component } from '@angular/core';

import { AppConfigService } from '../core/services/app-config.service';

@Component({
  templateUrl: './<%= moduleName %>.component.html'<% if (styles) { %>,
  styleUrls: [ './<%= moduleName %>.component.scss' ]<% } %>
})

export class <%= camelModuleName %>Component {
  constructor (configService: AppConfigService) {
  }
}
