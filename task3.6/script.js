var btn = document.getElementById("btn");
var form = document.getElementById("form");

var username = document.getElementById("username").value;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  function getUserData() {
    document.getElementsByClassName("data").innerHTML =
      "Username: <br>" + username;
  }
  getUserData();
  console.log(getUserData());
});
