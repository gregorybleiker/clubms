import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
      this.resource('pages', {path: '/'},
		function() {
		  this.route('page', { path: '/page/:page_id'});
		});
});

export default Router;
