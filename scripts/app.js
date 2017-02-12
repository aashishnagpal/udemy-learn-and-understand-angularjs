/**
 * Created by Aashish on 2/4/2017.
 */
'use strict';
var app = angular.module('weatherApp', ['ngRoute', 'ngResource']);

app.config(['$sceDelegateProvider', function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://api.openweathermap.org/**'
  ]);
}]);








