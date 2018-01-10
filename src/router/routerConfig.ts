declare let require: any;
export default class RouterConfigController {
    static $inject = ['$stateProvider','$urlRouterProvider', '$locationProvider'];
    constructor($stateProvider:any,$urlRouterProvider: any, $locationProvider: any) {
        $urlRouterProvider.otherwise("home");
        $locationProvider.html5Mode(false);
        $stateProvider.state('home', {
            url: '/home',
            templateProvider: function ($q: any) {
                var deferred = $q.defer();
                require.ensure(['../module/home/home.html'], function (require: any) {
                    var template = require('../module/home/home.html');
                    deferred.resolve(template);
                }, 'home-tpl');
                return deferred.promise;
            },
            controller: 'homeCtrl',
            controllerAs: 'vm',
            resolve: {
                'app.home': function ($q: any, $ocLazyLoad: any) {
                    var deferred = $q.defer();
                    require.ensure(['../module/home/home.controller'], function () {
                        var mod = require('../module/home/home.controller');
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