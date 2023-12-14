import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prim2-пример-l');
  this.route('i-i-s-prim2-пример-e',
  { path: 'i-i-s-prim2-пример-e/:id' });
  this.route('i-i-s-prim2-пример-e.new',
  { path: 'i-i-s-prim2-пример-e/new' });
});

export default Router;
