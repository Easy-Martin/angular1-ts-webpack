
declare let require: any, angular: any;
import RouterConfigController from './router/routerConfig'
require("angular")
require('angular-ui-router/release/angular-ui-router');
require('ocLazyLoad/dist/ocLazyLoad');
angular.module('app', [
  'ui.router',
  'oc.lazyLoad'
]).config(RouterConfigController);
