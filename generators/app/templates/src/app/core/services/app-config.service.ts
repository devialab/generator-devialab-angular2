import { Injectable, Optional } from '@angular/core';

@Injectable()
export class AppConfigService {

  public host: String = process.env.HOST;
  public port: Number = process.env.PORT;
  public env: String = process.env.ENV;
  public appConfig: Object = process.env.APP_CONFIG || {};
  // public customConfig: Object;

  constructor () {
  }

}
