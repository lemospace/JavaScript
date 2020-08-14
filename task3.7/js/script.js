var str;
window.onload = () => {
  str = decodeURIComponent(location.search);
  str = str.slice(1);
  var data = str.split("&");
  console.log(data);

  //var name = data[0].split("=")[1];
  //var email = data[1].split("=")[1];
  //var phone = data[2].split("=")[1];
  //var address = data[3].split("=")[1];
  //var city = data[4].split("=")[1];
  //var state = data[5].split("=")[1];
  //var zip = data[6].split("=")[1];
  //
  //var inputName = document.getElementById("name");
  //var inputEmail = document.getElementById("email");
  //var inputPhone = document.getElementById("phone");
  //var inputAddress = document.getElementById("address");
  //var inputCity = document.getElementById("city");
  //var inputState = document.getElementById("state");
  //var inputZip = document.getElementById("zip");
  //
  //inputName.value = name;
  //inputEmail.value = email;
  //inputPhone.value = phone;
  //inputAddress.value = address;
  //inputCity.value = city;
  //inputState.value = state;
  //inputZip.value = zip;

  var hiddenData = document.querySelector(".hidden");

  for (var i = 0; i < data.length; i++) {
    var p = document.createElement("p");

    var value = decodeURIComponent(data[i].split("=")[1]);

    p.append(value);
    hiddenData.appendChild(p);
  }
};
