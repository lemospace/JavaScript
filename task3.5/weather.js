var x = document.getElementById("latitude");
var y = document.getElementById("longitude");

var latValue = x.value;
var lonValue = y.value;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = position.coords.latitude;
  y.innerHTML = position.coords.longitude;
}

var WeatherAPIKey = "62adbc2bffd1bb07adc82799df6242b9";
var weatherLLQueryURL =
  "http://api.openweathermap.org/data/2.5/weather?lat=" +
  latValue +
  "&lon=" +
  lonValue +
  "&appid=" +
  WeatherAPIKey;
console.log(weatherLLQueryURL);

//{ "id": 706483, "name": "Kharkiv", "state": "", "country": "UA", "coord": { "lon": 36.25, "lat": 50.0 } },
