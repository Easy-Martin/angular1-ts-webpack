declare let require: any;
export default class RouterConfigController {
    static $inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    constructor($stateProvider: any, $urlRouterProvider: any, $locationProvider: any) {
        $stateProvider.state('home', {
            url: '/home',
            templateProvider: ['$q', function ($q: any) {
                var deferred = $q.defer();
                require.ensure([], function (require: any) {
                    var template = require('../module/home/home.html');
                    deferred.resolve(template);
                }, 'home-tpl');
                return deferred.promise;
            }],
            controller: 'homeCtrl',
            controllerAs: 'vm',
            resolve: {
                home: ['$q', '$ocLazyLoad', function ($q: any, $ocLazyLoad: any) {
                    var deferred = $q.defer();
                    require.ensure([], function (require: any) {
                        var mod = require('../module/home/home.controller').default;
                        $ocLazyLoad.load({
                            name: mod.name,
                        });
                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }]
            }
        }).state('main', {
            url: '/main',
            templateProvider: ['$q', function ($q: any) {
                var deferred = $q.defer();
                require.ensure([], function (require: any) {
                    var template = require('../module/main/main.html');
                    deferred.resolve(template);
                }, 'main-tpl');
                return deferred.promise;
            }],
            controller: 'mainCtrl',
            controllerAs: 'vm',
            resolve: {
                main: ['$q', '$ocLazyLoad', function ($q: any, $ocLazyLoad: any) {
                    var deferred = $q.defer();
                    require.ensure([], function (require: any) {
                        var mod = require('../module/main/main.controller').default;
                        $ocLazyLoad.load({
                            name: mod.name,
                        });
                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }]
            }
        });
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/home");
    }
}