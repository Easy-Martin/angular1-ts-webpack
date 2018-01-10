let angular = require('angular');
declare let require:any;

class MianRouterConfig{
    static $inject = ['$stateProvider'];
    constructor($stateProvider: any) {
        $stateProvider.state('main', {
            url: '/main',
            templateProvider: function($q:any) {
                var deferred = $q.defer();
                require.ensure(['./main.html'], function(require:any) {
                    var template = require('./main.html');
                    deferred.resolve(template);
                }, 'main-tpl');
                return deferred.promise;
            },
            controller: 'mainCtrl',
            controllerAs: 'vm',
            resolve: {
                'app.main': function($q:any, $ocLazyLoad:any) {
                    var deferred = $q.defer();
                    require.ensure(['./main.controller'], function() {
                        var mod = require('./main.controller');
                        $ocLazyLoad.load({
                            name: 'app.main'
                        });
                        deferred.resolve(mod.controller);
                    }, 'main-ctl');
                    return deferred.promise;
                }
            }
        });
    }
}

export default angular.module('app.main', []).config(MianRouterConfig).name;
