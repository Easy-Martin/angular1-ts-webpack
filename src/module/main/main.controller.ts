let angular = require('angular');
declare let require:any;

class MainContraller{
    static $inject = ['$scope'];
    constructor(private $scope:any){

    }
}
export default angular.module("app.main",[]).controller("mainCtrl",MainContraller);
