var generators = require('yeoman-generator'),
    Promise = require('es6-promise').Promise,
    glob = require('glob'),
    _ = require('lodash');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = generators.Base.extend({

  initializing: {

   init: function() {
     this.params = this.params || {};
     this.params._ = _;
   }

  },

  prompting: {

    moduleName: function() {
      return this.prompt({
        type: 'input',
        name: 'moduleName',
        message: 'Your module name in kebab-case',
        default: 'any-module'
      }).then(function(answers) {
        this.params.moduleName = answers.moduleName;
        this.params.camelModuleName = capitalizeFirstLetter(_.camelCase(this.params.moduleName));
      }.bind(this));
    },

    description: function() {

      return this.prompt({
        type: 'input',
        name: 'description',
        message: 'Do you want to add a brief description of the module? It could be helpful',
        default: 'Angular2 module'
      }).then(function(answers) {
        this.params.description = answers.description;
      }.bind(this));
    },

    router: function() {

        return this.prompt({
          type: 'confirm',
          name: 'router',
          message: 'It has a router module?',
          choices: ['yes', 'no'],
          default: 'yes'
        }).then(function(answers) {
          this.params.router = answers.router;
        }.bind(this));
    },

    component: function() {

      this.hasStyles = function() {
        return this.prompt({
          type: 'input',
          name: 'styles',
          message: 'The component has it own custom scss stylesheet?',
          default: 'yes'
        }).then(function(answers) {
          this.params.styles = answers.styles;
        }.bind(this));
      };

      return this.prompt({
        type: 'confirm',
        name: 'component',
        message: 'The module has a main angular2 component?',
        choices: ['yes', 'no'],
        default: 'yes'
      }).then(function(answers) {
        this.params.component = answers.component;
        if (answers.component) {
          return this.hasStyles();
        }
      }.bind(this));
    }
  },

  writing: {
    copyTpl: function () {

      var done = this.async();
      this.log('Parsing module templates..');
      glob(this.templatePath('**/*.tpl'), function(er, files) {
        files.forEach(function(file) {

          var src = file.split('module/templates/')[1],
              type = src.split('-')[1].split('.')[1].split('.')[0];
              extension = src.split(type + '.')[1].replace('.tpl', ''),
              outputFilename = '',
              moduleName = this.params.moduleName;

          if (!this.params[type] && type !== 'module' ||
              extension === 'scss' && !this.params.styles ||
              src.indexOf('router') !== -1 && !this.params.router) { // filter optional files that depends on input params
              return;
          }

          if (src.indexOf('router') !== -1) {
            moduleName = moduleName + '-' + 'router';
          }

          outputFilename = moduleName + '.' + type + '.' + extension;

          this.fs.copyTpl(
            this.templatePath(src),
            this.destinationPath('src/app/' + this.params.moduleName + '/' + outputFilename),
            this.params
          );

        }.bind(this));

        done();

      }.bind(this));

    }
  }

    /**
     * Copy all normal files to target folder
     */
    /*copyScaffolding: function() {

      var ncp = require('ncp').ncp;

      ncp.limit = 16;
      var done = this.async();
      this.log('Copying project scaffolding..');
      ncp(this.sourceRoot(), this.destinationRoot(), {
        filter: function(fileName) {
          return fileName && fileName.endsWith && !fileName.endsWith('.tpl');
        }
      }, function(err) {
        if (err) {
          return console.error(err);
        }
        done();
      });

    }

  },

  install: {
    npmInstall: function () {
      this.log('Installing project dependencies..');

      this.npmInstall();
    }
  }*/

});
