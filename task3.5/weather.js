$(document).ready(function () {
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            var widget = showResults(data)


            $("#showWeather").html(widget);

            $("#city").val('');
        }


  $.get(
    "http://api.openweathermap.org/data/2.5/weather",
    {
      id: "706483",
      appid: "62adbc2bffd1bb07adc82799df6242b9",
    },
    function (data) {
      console.log(data);
    }
  );
});
//{ "id": 706483, "name": "Kharkiv", "state": "", "country": "UA", "coord": { "lon": 36.25, "lat": 50.0 } },
