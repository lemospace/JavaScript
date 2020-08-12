var btn = document.getElementById("btn");
var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var usernameValue = document.getElementById("username").value.trim();
var emailValue = document.getElementById("email").value.trim();
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var passwordValue = document.getElementById("password").value.trim();
var password2Value = document.getElementById("password2").value.trim();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInputs();

  var prefers = document.querySelectorAll('input[type="checkbox"]:checked');
  var usernameOut = document.querySelector(".username-out");
  var emailOut = document.querySelector(".email-out");
  var detailsOut = document.querySelector(".details-out");

  class User {
    constructor(usernameValue, passwordValue, password2Value, emailValue) {
      this.usernameValue = username.value;
      this.passwordValue = password.value;
      this.password2Value = password2.value;
      this.emailValue = email.value;
    }

    getData() {
      usernameOut.innerHTML = username.value;
      emailOut.innerHTML = email.value;
      return this;
    }
  }

  let user = new User(usernameValue, passwordValue, password2Value, emailValue);
  console.log(user.getData());

  class Details {
    constructor(prefers) {
      this.prefers = prefers;
    }
    getDetails() {
      for (var prefer of prefers) {
        var preferDiv = document.createElement("div");
        preferDiv.className = "pref";
        detailsOut.appendChild(preferDiv);
        preferDiv.append(prefer.value);
      }

      return this;
    }
  }
  let details = new Details(prefers);
  console.log(details.getDetails());
});

function checkInputs() {
  var usernameValue = username.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();
  var password2Value = password2.value.trim();
  var usernameOut = document.querySelector(".username-out");

  if (usernameValue === "") {
    setErrorFor(username, "Username can not be blank");
  } else if (!isUsername(usernameValue)) {
    setErrorFor(
      username,
      "Username should be more than 3 symbols long and may include the symbols '-' and '_'. "
    );
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email can not be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password can not be blank");
  } else if (!isPassword(passwordValue)) {
    setErrorFor(
      password,
      "Password should be more than 7 symbols long and include at least one numeric symbol."
    );
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password can not be blank");
  } else if (passwordValue !== password2Value) {
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
  return /^[a-z0-9_-]{4}$/.test(username);
}
