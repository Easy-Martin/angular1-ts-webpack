webpackJsonp([3],{

/***/ "AIhE":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("/jXN");
__webpack_require__("SfIo");
__webpack_require__("zKJk");
var app = angular.module('app', [
    'ui-router',
    'oc.lazyLoad'
]);
app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        alert(1);
        $stateProvider.state('home', {
            url: '/home',
            templateProvider: function ($q) {
                var deferred = $q.defer();
                __webpack_require__.e/* require.ensure */(1).then((function (require) {
                    var template = __webpack_require__("g7pJ");
                    deferred.resolve(template);
                }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                return deferred.promise;
            },
            controller: 'homeCtrl',
            controllerAs: 'vm',
            resolve: {
                'app.home': function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(0).then((function () {
                        var mod = __webpack_require__("ymvN");
                        $ocLazyLoad.load({
                            name: 'app.home'
                        });
                        deferred.resolve(mod.controller);
                    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }
            }
        });
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/home");
    }]);
console.log(app.config);


/***/ })

},["AIhE"]);
//# sourceMappingURL=app.js.map