
import { platformBrowser } from '@angular/platform-browser';
import { ApplicationModuleNgFactory } from '../aot/node_modules/@angular/core/src/application_module.ngfactory'; // TODO: change the main module factory reference

import { enableProdMode } from '@angular/core';


enableProdMode();

platformBrowser().bootstrapModuleFactory(ApplicationModuleNgFactory);
