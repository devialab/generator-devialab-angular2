import { Component } from '@angular/core';

import { AppConfigService } from '../core/services/app-config.service';

@Component({
  templateUrl: './<%= moduleName %>.component.html'<% if (styles) { %>,
  stylesUrl: [ './<%= moduleName %>.component.scss' ]<% } %>
})

export class <%= moduleName %>Component {
  constructor (configService: AppConfigService) {
  }
}
