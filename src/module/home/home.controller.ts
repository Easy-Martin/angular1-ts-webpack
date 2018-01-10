let angular = require('angular');
declare let require:any;
export default angular.module("app.home").controller("homeCtrl", function() {
    this.test = function() {
        alert(this.name);
    }

}).name;
