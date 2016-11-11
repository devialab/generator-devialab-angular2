var generators = require('yeoman-generator'),
    Promise = require('es6-promise').Promise,
    glob = require('glob'),
    _ = require('lodash');

module.exports = generators.Base.extend({

initializing: {

 init: function() {
   this.params = this.params || {};
   this.params._ = _;
 }

},

prompting: {

  appName: function() {
    return this.prompt({
      type: 'input',
      name: 'appName',
      message: 'Your project name in kebab-case',
      default: this.appname
    }).then(function(answers) {
      this.params.appName = answers.appName;
    }.bind(this));
  },

  description: function() {
    return this.prompt({
      type: 'input',
      name: 'description',
      message: 'Your project description',
      default: 'Project description'
    }).then(function(answers) {
      this.params.description = answers.description;
    }.bind(this));
  },

  tags: function() {
    return this.prompt({
      type: 'input',
      name: 'tags',
      message: 'Your project tags',
      default: this.params.appName + ', angular2, devialab, corbel'
    }).then(function(answers) {
      this.params.tags = ( answers === this.params.appName + ', angular2, devialab, corbel' ? answers.tags : this.params.appName + ', ' + answers.tags + ', angular2, devialab' );
    }.bind(this));
  },

  corbel: function() { //Rv3--Oaj_YPDjHqxFdhEdA

      this.corbelDomain = function() {
        return this.prompt({
          type: 'input',
          name: 'domain',
          message: 'corbel.io domain',
          default: this.params.appName
        }).then(function(answers) {
          this.params.domain = answers.domain;
          return this.corbelClientId();
        }.bind(this));
      };

      this.corbelClientId = function() {
        return this.prompt({
          type: 'input',
          name: 'clientId',
          message: 'corbel.io clientId',
          default: 'clientId'
        }).then(function(answers) {
          this.params.clientId = answers.clientId;
          return this.corbelClientSecret();
        }.bind(this));
      };

      this.corbelClientSecret = function() {
        return this.prompt({
          type: 'input',
          name: 'clientSecret',
          message: 'corbel.io clientSecret',
          default: 'clientSecret'
        }).then(function(answers) {
          this.params.clientSecret = answers.clientSecret;
          return;
        }.bind(this));
      };

      return this.prompt({
        type: 'confirm',
        name: 'corbel',
        message: 'is a corbel proyect?',
        choices: ['yes', 'no'],
        default: 'yes'
      }).then(function(answers) {
        this.params.corbel = answers.corbel;
        if (answers.corbel) {
          return this.corbelDomain();
        }
      }.bind(this));
  },
  
  webtranslateit: function() {

    this.webtranslateitProjectKey = function() {
      return this.prompt({
        type: 'input',
        name: 'webtranslateitProjectToken',
        message: 'webtranslateit project key',
        default: 'Rv3--Oaj_YPDjHqxFdhEdA'
      }).then(function(answers) {
        this.params.webtranslateitProjectToken = answers.webtranslateitProjectToken;
      }.bind(this));
    };

    return this.prompt({
      type: 'confirm',
      name: 'webtranslateit',
      message: 'has a webtranslateit project?',
      choices: ['yes', 'no'],
      default: 'yes'
    }).then(function(answers) {
      this.params.webtranslateit = answers.webtranslateit;
      if (answers.webtranslateit) {
        return this.webtranslateitProjectKey();
      }
    }.bind(this));
  }
},

writing: {
  copyTpl: function () {
    var done = this.async();
    this.log('Parsing project templates..');
    glob(this.templatePath('**/*.tpl'), function(er, files) {
      files.forEach(function(file) {

        var src = file.split('app/templates/');
        src = src[1];

        this.fs.copyTpl(
          this.templatePath(src),
          this.destinationPath(src.replace('.tpl', '')),
          this.params
        );

      }.bind(this));

      done();

    }.bind(this));

  },

  /**
   * Copy all normal files to target folder
   */
  copyScaffolding: function() {

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
}

});
