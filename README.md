# Angular2 generator by [Devialab](http://devialab.com)

An Angular2 generator for generic Devialab webapp projects with webpack

> Yeoman generator for Angular2 - lets you quickly set up a project with sensible defaults and best practices.

## Usage

Install `yo` and `generator-devialab-angular2`:
```
npm install -g yo generator-devialab-angular
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo devialab-angular2`:
```
yo devialab-angular2
```

Builds
------
Run `npm run build` or `npm run build:dev` to build the app for development.
Run `npm run build:prod` to build the app for production,

Server
-----
Run `npm run start`, `npm run server` or `npm run server:dev` to serve the app for development.
Run `npm run server:prod` to serve the app for producction mode (you have to build the app for production before serve)

Testing
-----
Run `npm run test` or `npm run test:unit` to unit test the app in a single run.
Run `npm run test:unit:debug` to unit test the app in a watching mode.

## Generators

Available generators:

* [devialab-angular2](#app)

### App
Sets up a new Angular2 app, generating all the boilerplate you need to get started. The app generator also optionally installs Bootstrap, additional Angular2 modules, and webpack bundler set up ...

Example:
```bash
yo devialab-angular2
```

The project use npm to resolve all the dependencies

### Module
Sets up a new Angular2 module, generating all the basic components that you need to create a new module.

Example:
```bash
yo devialab-angular2:module
```
