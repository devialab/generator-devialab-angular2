var path = require('path'),
    _ = require('lodash'),
    underscoreDeepExtend = require('underscore-deep-extend');

  _.mixin({deepExtend: underscoreDeepExtend(_)});


// Helper functions
var ROOT = path.resolve(__dirname, '../..');

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

function requireEnviroments (_env='dev') {
  let common = require('../environments/common.env.json'),
      env = require('../environments/' + _env + '.env.json');

  return _.deepExtend(common, env);
}

exports.hasProcessFlag = hasProcessFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
exports.requireEnviroments = requireEnviroments;
