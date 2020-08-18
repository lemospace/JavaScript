var str;
window.onload = () => {
  str = decodeURIComponent(location.search);

  var data = str.slice(1).replace(/\+/g, " ").split("&");

  console.log(data);

  var dataDiv = document.querySelector(".data");

  for (var i = 0; i < data.length; i++) {
    var p = document.createElement("p");
    var key = data[i].split("=")[0];
    var value = data[i].split("=")[1];
    var text = document.createTextNode(key + ": " + value);

    p.append(text);
    dataDiv.appendChild(p);
  }
};
