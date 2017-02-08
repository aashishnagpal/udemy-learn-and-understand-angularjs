/**
 * Created by Aashish on 2/8/2017.
 */
app.directive('temperatureReport', [function () {
  return {
    restrict: 'E',
    templateUrl: 'views/temperature.html',
    scope: {
      day: '=',
      dateFormat: '@',
      toFahrenheit: '&',
      toDate: '&'
    },

  };
}]);