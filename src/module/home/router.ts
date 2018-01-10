let angular = require('angular');
declare let require: any;

class HomeRouterConfig {
    static $inject = ['$stateProvider'];
    constructor($stateProvider: any) {
        $stateProvider.state('home', {
            url: '/home',
            templateProvider: function ($q: any) {
                var deferred = $q.defer();
                require.ensure(['./home.html'], function (require: any) {
                    var template = require('./home.html');
                    deferred.resolve(template);
                }, 'home-tpl');
                return deferred.promise;
            },
            controller: 'homeCtrl',
            controllerAs: 'vm',
            resolve: {
                'app.home': function ($q: any, $ocLazyLoad: any) {
                    var deferred = $q.defer();
                    require.ensure(['./home.controller'], function () {
                        var mod = require('./home.controller');
                        $ocLazyLoad.load({
                            name: 'app.home'
                        });
                        deferred.resolve(mod.controller);
                    }, 'home-ctl');
                    return deferred.promise;
                }
            }
        });
    }
}


export default angular.module('app.home', []).config(HomeRouterConfig).name;
