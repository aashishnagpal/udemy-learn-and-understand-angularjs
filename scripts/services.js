/**
 * Created by Aashish on 2/8/2017.
 */
app.service('cityService', [function () {
  this.city = "New York, NY";
  this.latitude = null;
  this.longitude = null;
}]);

app.factory('weatherFactory', ['$resource', '$log', function ($resource, $log) {

  var API_PATH = 'http://api.openweathermap.org/data/2.5/forecast/daily';
  var APP_ID = '089c7f3f5a9253c4eadba886da4e4f5c';
  var weatherResource = $resource(API_PATH, {appid: APP_ID}, {get: {method: "JSONP"}}
  );
  $log.debug(API_PATH);
  $log.debug(APP_ID);
  $log.debug(weatherResource);
  return {
    getWeather: function (days, city, latitude, longitude) {
      var weatherParams = {};
      if (city) {
        weatherParams.q = city;
      } else if (latitude && longitude) {
        weatherParams.lat = latitude;
        weatherParams.lon = longitude;
      }
      weatherParams.cnt = days;
      weatherParams.appid = APP_ID;
      $log.debug(weatherParams);


      return weatherResource.get(weatherParams, function (successResult) {
        $log.debug(successResult);
        return successResult;
      }, function (errorResult) {
        $log.debug(errorResult);
        return errorResult;
      });
    }
  }
}]);
