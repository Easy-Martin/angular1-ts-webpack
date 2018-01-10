let angular = require('angular');
declare let require:any;

class HomeController{
    static $inject = ['$scope'];
    name:string = 'app.name';
    constructor(private $scope:any){
        console.log(11111111)
        alert(this.name)
    }
}
export default angular.module("app.home",[]).controller("homeCtrl", HomeController);
