
let angular = require('angular');
declare let require: any;
function greeting() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: '<h1>Hello, {{name}}</div>'
  }
}

export default angular.module('directives.greeting', [])
  .directive('greeting', greeting)
  .name;
