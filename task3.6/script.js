var btn = document.getElementById("btn");
var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInputs();

  var prefers = document.querySelectorAll('input[type="checkbox"]:checked');
  var usernameOut = document.querySelector(".username-out");
  var emailOut = document.querySelector(".email-out");
  var detailsOut = document.querySelector(".details-out");

  class User {
    constructor(username, password, password2, email, prefers) {
      this.username = username;
      this.password = password;
      this.password2 = password2;
      this.email = email;
      this.prefers = prefers;
    }

    getData() {
      usernameOut.innerHTML = username.value;
      emailOut.innerHTML = email.value;
      for (var prefer of prefers) {
        var preferDiv = document.createElement("div");
        preferDiv.className = "pref";
        detailsOut.appendChild(preferDiv);
        preferDiv.append(prefer.value);
      }
      return this;
    }
  }

  let user = new User(
    username.value,
    password.value,
    password2.value,
    email.value,
    prefers
  );
  console.log(user.getData());
});

function checkInputs() {
  var usernameValue = username.value.trim();

  if (username.value === "") {
    setErrorFor(username, "Username can not be blank");
  } else if (!isUsername(username.value)) {
    setErrorFor(
      username,
      "Username should be more than 3 symbols long and may include the symbols '-' and '_'. "
    );
  } else {
    setSuccessFor(username);
  }

  if (email.value === "") {
    setErrorFor(email, "Email can not be blank");
  } else if (!isEmail(email.value)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (password.value === "") {
    setErrorFor(password, "Password can not be blank");
  } else if (!isPassword(password.value)) {
    setErrorFor(
      password,
      "Password should be more than 7 symbols long and include at least one numeric symbol."
    );
  } else {
    setSuccessFor(password);
  }

  if (password2.value === "") {
    setErrorFor(password2, "Password can not be blank");
  } else if (password.value !== password2.value) {
    setErrorFor(password2, "Passwords do not match");
  } else {
    setSuccessFor(password2);
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.classList.add("error");
    formControl.classList.remove("success");
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.add("success");
    formControl.classList.remove("error");
  }
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function isPassword(password) {
  return /^(?=.*\d).{8,}$/.test(password);
}
function isUsername(username) {
  return /^[a-z0-9_-]{4,}$/.test(username);
}
