
let path = require('path'),
    fs = require('fs'),
    request = require('request'),
    async = require('async'),
    helpers = require('./webpack/helpers');

const ROOT = path.resolve(__dirname, '../'),
      env = helpers.requireEnviroments(process.env.ENV || 'dev') || {},
      envConfig = env.config || {},
      webtranslateitConfig = envConfig.webtranslateit || {
        'base_url': 'https://webtranslateit.com/api/projects/'
      },
      urlBase = webtranslateitConfig['base_url'] || 'https://webtranslateit.com/api/projects/',
      projectToken = webtranslateitConfig['project_token'] || 'PUBLIC_KEY',
      url = urlBase + projectToken,
      langs = webtranslateitConfig.langs || ['en', 'es'],
      dest = ROOT + '/src/assets/locales/';


function getMasterProjectFileId(cb) {
    console.log('get project info... ')
    console.log(url + '.json');

    request(url + '.json', function(error, response) {
        if (error) {
          return cb(error);
        }

        response.body = JSON.parse(response.body);
        if (response.statusCode !== 200) {
          return cb(response.body.error);
        }
        var masterProjectFileId = response.body.project['project_files'][0];
        masterProjectFileId = masterProjectFileId['master_project_file_id'] || masterProjectFileId.id;

        cb(error, masterProjectFileId);
    });
}

function dowwloadLocales(masterProjectFileId, cb) {
    if (!masterProjectFileId) {
        return cb('Error undefined masterprojectfileid');
    }

    var localeUrl = url + '/files/' + masterProjectFileId + '/locales/';

    var localesUrl = langs.map(function(langName) {
        return localeUrl + langName;
    });

    console.log('get locales ');
    console.log(JSON.stringify(localesUrl));

    async.map(localesUrl, request, function(err, responses) {

        if (err) {
            return cb(err, responses);
        }

        responses.map(function(response, index) {
            response.body = JSON.parse(response.body);

            if (response.statusCode !== 200) {
                return cb(response.body.error + ' "' + langs[index] + '"');
            }

            var file = dest + '/' + langs[index] + '.json',
                data = JSON.stringify(response.body, null, '  ');

            fs.writeFile(file, data, function (err) {
              console.log(langs[index] + ' locale file downloaded');

              if(err) {
                return console.log(err);
              }

              cb();
            });
        });

    });

}

// var done = async();

async.waterfall([getMasterProjectFileId, dowwloadLocales], function(err) {
    if (err) {
      console.log('An error has ocurred loading the locales: ', JSON.stringify(error));
    }
});
