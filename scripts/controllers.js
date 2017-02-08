/**
 * Created by Aashish on 2/8/2017.
 */
app.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
  $scope.city = cityService.city;

  $scope.$watch('city', function () {
    cityService.city = $scope.city;
  })
}]);

app.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'weatherFactory',
  function ($scope, $resource, $routeParams, cityService, weatherFactory) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.weatherResult = weatherFactory.getWeather($scope.days, $scope.city);
    $scope.convertToFahrenheit = function (degK) {
      return Math.round((1.8 * (degK - 273)) + 32);
    };
    $scope.convertToCelcius = function (degK) {
      return Math.round(degK - 273);
    };
    $scope.convertToDate = function (dt) {
      return new Date(dt * 1000);
    };
  }
]);