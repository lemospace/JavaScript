var WeatherAPIKey = "62adbc2bffd1bb07adc82799df6242b9";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getURL);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function getURL(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var weatherLLQueryURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    WeatherAPIKey;

  var weather5DaysURL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    WeatherAPIKey;

  getWeatherByUrl(weatherLLQueryURL, updateCurrentWeather);
  getWeatherByUrl(weather5DaysURL, update5DaysWeather);
}
function getWeatherByUrl(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data));
}

function updateCurrentWeather(data) {
  console.log(data);
  document.querySelector(".city").textContent = data.name;
  document.querySelector(".forecast").innerHTML =
    Math.round(data.main.temp - 273) + "&deg;";
  document.querySelector(".disclaimer").textContent =
    data.weather[0]["description"];
  document.querySelector(
    ".icon"
  ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
  document.querySelector(".one").textContent = data.wind["speed"] + " m/s";
  document.querySelector(".two").textContent = data.clouds["all"] + "%";
  document.querySelector(".three").textContent = data.main["pressure"] + " hpa";
  document.querySelector(".four").textContent = data.main["humidity"] + " %";

  let sunrise = data.sys["sunrise"];
  let sunset = data.sys["sunset"];
  var sunriseDate = new Date(sunrise * 1000);
  var sunsetDate = new Date(sunset * 1000);
  var sunriseHours = sunriseDate.getHours();
  var sunriseMinutes = "0" + sunriseDate.getMinutes();
  //var sunriseSeconds = "0" + sunriseDate.getSeconds();
  var sunsetHours = sunsetDate.getHours();
  var sunsetMinutes = "0" + sunsetDate.getMinutes();
  //var sunsetSeconds = "0" + sunsetDate.getSeconds();

  var formatedTimeRise = sunriseHours + ":" + sunriseMinutes.substr(-2); //+
  //":" +
  //sunriseSeconds.substr(-2);

  var formatedTimeSet = sunsetHours + ":" + sunsetMinutes.substr(-2); //+
  // ":" +
  // sunsetSeconds.substr(-2);

  document.querySelector(".five").innerHTML = formatedTimeRise;
  document.querySelector(".six").innerHTML = formatedTimeSet;
  document.querySelector(".seven").innerHTML =
    "[" + data.coord["lon"] + ", " + data.coord["lat"] + "]";
}

// документ готов, можно работать!

function update5DaysWeather(data) {
  console.log(data);
  document.querySelector(".city2").textContent =
    "Hourly weather and forecasts in " +
    data.city.name +
    ", " +
    data.city.country;

  for (let i = 0; i < data.list.length; i++) {
    var now = new Date();
    now.setDate(now.getDate() + i / 8);
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Nov",
      "Dec",
    ];
    var fullDate =
      now.getDate() +
      " " +
      months[now.getMonth()] +
      " " +
      now.getFullYear() +
      ", " +
      days[now.getDay()];

    if (i % 8 == 0) {
      var date = document.createElement("div");
      date.className = "date";
      document.querySelector(".day").appendChild(date);

      date.innerHTML = fullDate;
    }

    var hours = document.createElement("div");
    hours.id = `hours_${i}`;
    hours.className = "hours";
    document.querySelector(`.day`).appendChild(hours);

    var time = document.createElement("div");
    time.className = "time";
    var icon = document.createElement("div");
    icon.className = "icon2";
    var details = document.createElement("div");
    details.className = "details";

    document.querySelector(`#hours_${i}`).appendChild(time);

    document.querySelector(`#hours_${i}`).appendChild(icon);
    document.querySelector(`#hours_${i}`).appendChild(details);

    let timeformat = `${data.list[`${i}`]["dt"]}`;
    var timeformatDate = new Date(timeformat * 1000);
    var timeformatHours = timeformatDate.getHours();
    var timeformatMinutes = "0" + timeformatDate.getMinutes();
    var formatedTime = timeformatHours + ":" + timeformatMinutes.substr(-2); //+
    time.innerHTML = formatedTime;

    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${
      data.list[`${i}`]["weather"][0]["icon"]
    }@2x.png">`;
    details.innerHTML = `${
      Math.round(data.list[`${i}`]["main"]["temp"]) - 273
    }&deg; 
        <i> 
        ${data.list[`${i}`]["weather"][0]["description"]}</i>,   
        ${data.list[`${i}`]["wind"]["speed"]}
        m/s, 
        <br> 
        clouds 
        ${data.list[`${i}`]["clouds"]["all"]}%, 
        ${data.list[`${i}`]["main"]["pressure"]}
         hpa`;
  }

  // document.querySelector(".time").innerHTML = data.list[0]["dt_txt"];
  // document.querySelector(
  //   ".icon2"
  // ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0]["weather"][0]["icon"]}@2x.png">`;
  // document.querySelector(".details").innerHTML = `${
  //   Math.round(data.list[0]["main"]["temp"]) - 273
  // }&deg;
  //       <i>
  //       ${data.list[0]["weather"][0]["description"]}</i>,
  //       ${data.list[0]["wind"]["speed"]}
  //       m/s,
  //       <br>
  //       clouds
  //       ${data.list[0]["clouds"]["all"]}%,
  //       ${data.list[0]["main"]["pressure"]}
  //        hpa`;
  //
  //document.querySelector(".hours2.time").innerHTML = data.list[1]["dt_txt"];
  //document.querySelector(
  //  ".hours2.icon2"
  //).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[1]["weather"][0]["icon"]}@2x.png">`;
  //document.querySelector(".hours2.details").innerHTML =
  //  Math.round(data.list[1]["main"]["temp"]) -
  //  273 +
  //  "&deg; " +
  //  "<i>" +
  //  data.list[1]["weather"][0]["description"] +
  //  "</i>" +
  //  ",   " +
  //  data.list[1]["wind"]["speed"] +
  //  " m/s, " +
  //  "<br>" +
  //  "clouds " +
  //  data.list[1]["clouds"]["all"] +
  //  "%, " +
  //  data.list[1]["main"]["pressure"] +
  //  " hpa";
  //
  //document.querySelector(".hours3.time").innerHTML = data.list[2]["dt_txt"];
  //document.querySelector(
  //  ".hours3.icon2"
  //).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[2]["weather"][0]["icon"]}@2x.png">`;
  //document.querySelector(".hours3.details").innerHTML =
  //  Math.round(data.list[2]["main"]["temp"]) -
  //  273 +
  //  "&deg; " +
  //  "<i>" +
  //  data.list[2]["weather"][0]["description"] +
  //  "</i>" +
  //  ",   " +
  //  data.list[2]["wind"]["speed"] +
  //  " m/s, " +
  //  "<br>" +
  //  "clouds " +
  //  data.list[2]["clouds"]["all"] +
  //  "%, " +
  //  data.list[2]["main"]["pressure"] +
  //  " hpa";
}
