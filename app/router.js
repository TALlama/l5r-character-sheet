import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('l5r', function() {
    this.route('roller');
    this.route('characters');
    this.route('character', { path: 'character/:id' });
  });
});
