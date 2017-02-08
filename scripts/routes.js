/**
 * Created by Aashish on 2/8/2017.
 */
app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController',
        controllerAs: 'homeCtrl'
      })
      .when('/forecast', {
        templateUrl: 'views/forecast.html',
        controller: 'forecastController',
        controllerAs: 'forecastCtrl'
      })
      .when('/forecast/:days', {
        templateUrl: 'views/forecast.html',
        controller: 'forecastController',
        controllerAs: 'forecastCtrl'
      })
      .otherwise('/');
}]);