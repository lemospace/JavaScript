var str;
window.onload = () => {
  str = decodeURIComponent(location.search);

  var data = str.slice(1).split("&");
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    var hiddenInputs = document.createElement("INPUT");
    hiddenInputs.setAttribute("type", "hidden");
    hiddenInputs.setAttribute("name", data[i].split("=")[0]);
    hiddenInputs.setAttribute(
      "value",
      decodeURIComponent(data[i].split("=")[1])
    );
    document.querySelector(".hidden").append(hiddenInputs);
  }
};
