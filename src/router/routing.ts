let angular = require('angular');
import homeRouter from '../module/home/router'
import mainRouter from '../module/main/router'
declare let require:any;

export let routing = angular.module('app.controllers', [
    homeRouter,
    mainRouter
]).name;
