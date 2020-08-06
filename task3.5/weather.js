var x = document.getElementById("latitude");
var y = document.getElementById("longitude");
var WeatherAPIKey = "62adbc2bffd1bb07adc82799df6242b9";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var weatherLLQueryURL =
    "http://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    WeatherAPIKey;
}
function weatherBaloon(byLocation) {
  fetch(weatherLLQueryURL)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

//{ "id": 706483, "name": "Kharkiv", "state": "", "country": "UA", "coord": { "lon": 36.25, "lat": 50.0 } },
