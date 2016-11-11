# Angular2 generator by [Devialab](http://devialab.com)

An Angular2 generator for generic Devialab webapp projects with webpack

> Yeoman generator for Angular2 - lets you quickly set up a project with sensible defaults and best practices.

## Usage

Install `yo`, `grunt-cli`, `bower` and `generator-devialab-angular2`:
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

Run `npm run build` for building and `npm run serve` for preview


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
