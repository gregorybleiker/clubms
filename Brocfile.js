/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// custom ClubMS   
app.import('vendor/ember-couchdb-kit/dist/ember-couchdb-kit.js');
app.import('vendor/ckeditor/ckeditor.js');
app.import('vendor/ckeditor/config.js');
app.import('vendor/ckeditor/adapters/jquery.js');
app.import('vendor/jMenu/js/jMenu.jquery.js');
app.import('vendor/jquery-ui-1.10.4/ui/jquery-ui.js');
app.import('vendor/jMenu/css/jmenu.css');
app.import('vendor/jquery-ui-1.10.4/demos/demos.css');
app.import('vendor/jquery-ui-1.10.4/themes/base/jquery-ui.css');
app.import('vendor/jquery-file-upload/js/jquery.fileupload.js');
// end custom ClubMS

module.exports = app.toTree();
