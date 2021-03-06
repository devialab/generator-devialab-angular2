{
  "name": "<%= appName %>",
  "version": "0.0.1",
  "description": "<%= description %>",
  "keywords": [
    <% _.each(tags.split(','), function(tag, index, tags){ %><%tag.trim();%>"<%=tag%>"<% if(index + 1 < tags.length){ %>,<% } %><% }); %>
  ],
  "author": {
    "name": "Devialab",
    "email": "hello@devialab.com",
    "url": "http://devialab.com/"
  },
  "repository": {
    "type": "git",
    "url": "git@bitbucket.org:devialab/<%= appName %>.git"
  },
  "license": "UNLICENSED",
  "private": true,
  "scripts": {
    "build:dev": "npm run clean:dist && webpack --config config/webpack/webpack.dev.js -p --progress --profile",
    "build:prod": "npm run clean:dist && node_modules/.bin/ngc -p tsconfig.aot.json && webpack --config config/webpack/webpack.prod.js --progress --profile --bail",
    "build": "npm run build:dev",
    "ci": "npm run lint && npm test && npm run test:e2e",
    "clean:dist": "npm run rimraf -- dist",
    "clean:install": "npm set progress=false && npm install",
    "clean:start": "npm start",
    "clean": "npm cache clean && npm run rimraf -- node_modules doc coverage dist",
    "docs": "npm run typedoc -- --options typedoc.json --exclude '**/*.spec.ts' ./src/",
    "lint": "npm run tslint \"src/**/*.ts\"",
    "postversion": "git push && git push --tags",
    "pree2e": "npm run webdriver:update -- --standalone",
    "protractor": "protractor",
    "rimraf": "rimraf",
    "server:dev:hmr": "npm run server:dev -- --inline --hot",
    "server:dev": "webpack-dev-server --open --config config/webpack/webpack.dev.js --progress --profile --watch --content-base src/",
    "server:prod": "http-server dist --cors",
    "server": "npm run server:dev",
    "start:hmr": "npm run server:dev:hmr",
    "start": "npm run server:dev",
    "test": "karma start",
    "test:unit:debug": "karma start --no-single-run",
    "test:unit": "karma start",
    "test:e2e": "npm run protractor",
    "test:e2e:live": "npm run e2e -- --elementExplorer",
    "tslint": "tslint",
    "typedoc": "typedoc",
    "watch:dev:hmr": "npm run watch:dev -- --hot",
    "watch:dev": "npm run build:dev -- --watch",
    "watch:prod": "npm run build:prod -- --watch",
    "watch:test": "npm run test -- --auto-watch --no-single-run",
    "watch": "npm run watch:dev",
    "webdriver-manager": "webdriver-manager",
    "webdriver:start": "npm run webdriver-manager start",
    "webdriver:update": "npm run webdriver-manager update",
    "webpack-dev-server": "webpack-dev-server",
    "webpack": "webpack",
    "webtranslateit:update": "node ./config/webtranslateit.js"
  },
  "dependencies": {
    "@angular/common": "2.4.4",
    "@angular/core": "2.4.4",
    "@angular/forms": "2.4.4",
    "@angular/http": "2.4.4",
    "@angular/platform-browser": "2.4.4",
    "@angular/platform-browser-dynamic": "2.4.4",
    "@angular/router": "3.4.4",
    "@angularclass/conventions-loader": "1.0.13",
    "@angularclass/hmr": "1.2.2",
    "@angularclass/hmr-loader": "3.0.2",
    "@ng-bootstrap/ng-bootstrap": "1.0.0-alpha.18",
    "@types/lodash": "4.14.50",
    "angular-svg-round-progressbar": "1.0.4",
    "angular2-loaders-css": "1.0.7",
    "angular2-notifications": "0.4.49",
    "assets-webpack-plugin": "3.5.0",
    "bootstrap": "^4.0.0-alpha.6",
    "http-server": "0.9.0",
    "ie-shim": "0.1.0",
    "jquery": "3.1.1",
    "lodash": "4.17.4",
    "ng2-translate": "5.0.0",
    "rxjs": "5.0.3",
    "zone.js": "0.7.4"
  },
  "devDependencies": {
    "@angular/compiler": "2.4.4",
    "@angular/compiler-cli": "2.4.4",
    "@angular/platform-server": "2.4.4",
    "@ngtools/webpack": "1.2.4",
    "@types/core-js": "0.9.35",
    "@types/hammerjs": "2.0.34",
    "@types/jasmine": "2.5.41",
    "@types/node": "7.0.0",
    "@types/protractor": "4.0.0",
    "@types/selenium-webdriver": "2.53.39",
    "@types/source-map": "0.5.0",
    "@types/uglify-js": "2.6.28",
    "@types/webpack": "2.2.2",
    "angular2-template-loader": "0.6.0",
    "awesome-typescript-loader": "3.0.0-beta.18",
    "bootstrap-loader": "2.0.0-beta.19",
    "codelyzer": "2.0.0-beta.4",
    "copy-webpack-plugin": "4.0.1",
    "css-loader": "0.26.1",
    "css-to-string-loader": "0.1.2",
    "exports-loader": "0.6.3",
    "expose-loader": "0.7.1",
    "extract-text-webpack-plugin": "1.0.1",
    "file-loader": "0.9.0",
    "html-webpack-plugin": "2.26.0",
    "imports-loader": "0.7.0",
    "istanbul-instrumenter-loader": "1.2.0",
    "json-loader": "0.5.4",
    "jsonfile": "2.4.0",
    "karma": "1.4.0",
    "karma-chrome-launcher": "2.0.0",
    "karma-coverage": "1.1.1",
    "karma-jasmine": "1.1.0",
    "karma-mocha-reporter": "2.2.2",
    "karma-remap-coverage": "0.1.4",
    "karma-sourcemap-loader": "0.3.7",
    "karma-webpack": "2.0.1",
    "lodash": "4.17.4",
    "node-sass": "4.3.0",
    "parse5": "3.0.1",
    "postcss-loader": "1.2.2",
    "postcss-load-config": "1.1.0",
    "protractor": "5.0.0",
    "raw-loader": "0.5.1",
    "reflect-metadata": "0.1.9",
    "resolve-url-loader": "1.6.1",
    "rimraf": "2.5.4",
    "sass-loader": "4.1.1",
    "script-ext-html-webpack-plugin": "1.5.0",
    "source-map-loader": "0.1.6",
    "string-replace-loader": "1.0.5",
    "style-loader": "0.13.1",
    "to-string-loader": "1.1.5",
    "ts-helpers": "1.1.2",
    "ts-node": "2.0.0",
    "tslint": "4.3.1",
    "tslint-loader": "3.3.0",
    "typedoc": "0.5.5",
    "typescript": "2.1.5",
    "underscore-deep-extend": "1.1.5",
    "url-loader": "0.5.7",
    "webpack": "2.2.0",
    "webpack-dev-middleware": "1.9.0",
    "webpack-dev-server": "2.2.0",
    "webpack-md5-hash": "0.0.5",
    "webpack-merge": "2.4.0"
  },
  "engines": {
    "node": ">= 6.9.1",
    "npm": ">= 3"
  }
}
