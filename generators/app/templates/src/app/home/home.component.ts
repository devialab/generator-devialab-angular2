import { Component } from '@angular/core';

import { AppConfigService } from '../core/services/app-config.service';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent {
  constructor (configService: AppConfigService) {
    console.log('Estamos en: ', configService.env);
  }
}
