var str;
window.onload = () => {
  str = decodeURIComponent(location.search);

  str = str.slice(1);
  var data = str.split("&");

  var dataDiv = document.querySelector(".data");

  for (var i = 0; i < data.length; i++) {
    var p = document.createElement("p");
    var key = data[i].split("=")[0];
    var value = decodeURIComponent(data[i].split("=")[1]);
    var text = document.createTextNode(key + ": " + value);

    p.appendChild(text);
    dataDiv.appendChild(p);
  }
};
