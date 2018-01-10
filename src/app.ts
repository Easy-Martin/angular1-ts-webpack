
declare let require: any, angular: any;
import RouterConfigController from './router/routerConfig'
angular.module('app', [
  require('angular-ui-router'),
  require('oclazyload')
])
  .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider: any) {
    $ocLazyLoadProvider.config({
      debug: true
    })
  }]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider: any, $urlRouterProvider: any, $locationProvider: any) {
    alert(1)
    $urlRouterProvider.otherwise("home");
    $locationProvider.html5Mode(false);
    $stateProvider.state('home', {
      url: '/home',
      templateProvider: function ($q: any) {
        var deferred = $q.defer();
        require.ensure(['./module/home/home.html'], function (require: any) {
          var template = require('./module/home/home.html');
          deferred.resolve(template);
        }, 'home-tpl');
        return deferred.promise;
      },
      controller: 'homeCtrl',
      controllerAs: 'vm',
      resolve: {
        'app.home': function ($q: any, $ocLazyLoad: any) {
          var deferred = $q.defer();
          require.ensure(['./module/home/home.controller'], function () {
            var mod = require('./module/home/home.controller');
            $ocLazyLoad.load({
              name: 'app.home'
            });
            deferred.resolve(mod.controller);
          }, 'home-ctl');
          return deferred.promise;
        }
      }
    });
  }]);

