const form = document.getElementById("form");
const model = document.getElementById("longboards");
const fName1 = document.getElementById("f-name1");
const fName = document.getElementById("f-name");
const sName1 = document.getElementById("s-name1");
const sName = document.getElementById("s-name");
const street1 = document.getElementById("street1");
const street = document.getElementById("street");
const state1 = document.getElementById("state1");
const state = document.getElementById("state");
const zip1 = document.getElementById("zip1");
const zip = document.getElementById("zip");
const phone1 = document.getElementById("phone1");
const phone = document.getElementById("phone");
const cardNumber = document.getElementById("cardNumber");
const expityMonth = document.getElementById("expityMonth");
const expityYear = document.getElementById("expityYear");
const cvCode = document.getElementById("cvCode");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function checkInputs() {
  // get the values from the inputs
  const modelValue = model.value.trim();
  const fName1Value = fName1.value.trim();
  const fNameValue = fName.value.trim();
  const sName1Value = sName1.value.trim();
  const sNameValue = sName.value.trim();
  const street1Value = street1.value.trim();
  const streetValue = street.value.trim();
  const state1Value = state1.value.trim();
  const stateValue = state.value.trim();
  const zip1Value = zip1.value.trim();
  const zipValue = zip.value.trim();
  const phone1Value = phone1.value.trim();
  const phoneValue = phone.value.trim();
  const cardNumberValue = cardNumber.value.trim();
  const expityMonthValue = expityMonth.value.trim();
  const expityYearValue = expityYear.value.trim();
  const cvCodeValue = cvCode.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (modelValue === "") {
    setErrorFor(model, "The item is not selected");
    return false;
  } else {
    setSuccessFor(model);
  }

  if (fName1Value === "") {
    setErrorFor(fName1, "Name can not be blank");
    return false;
  } else {
    setSuccessFor(fName1);
  }

  if (fNameValue === "") {
    setErrorFor(fName, "Name can not be blank");
    return false;
  } else {
    setSuccessFor(fName);
  }

  if (sName1Value === "") {
    setErrorFor(sName1, "Name can not be blank");
    return false;
  } else {
    setSuccessFor(sName1);
  }

  if (sNameValue === "") {
    setErrorFor(sName, "Name can not be blank");
    return false;
  } else {
    setSuccessFor(sName);
  }

  if (street1Value === "") {
    setErrorFor(street1, "Street can not be blank");
    return false;
  } else {
    setSuccessFor(street1);
  }

  if (streetValue === "") {
    setErrorFor(street, "Street can not be blank");
    return false;
  } else {
    setSuccessFor(street);
  }

  if (state1Value === "") {
    setErrorFor(state1, "State can not be blank");
    return false;
  } else {
    setSuccessFor(state1);
  }

  if (stateValue === "") {
    setErrorFor(state, "State can not be blank");
    return false;
  } else {
    setSuccessFor(state);
  }

  if (zip1Value === "") {
    setErrorFor(zip1, "Zip code can not be blank");
    return false;
  } else {
    setSuccessFor(zip1);
  }

  if (zipValue === "") {
    setErrorFor(zip, "Zip code can not be blank");
    return false;
  } else {
    setSuccessFor(zip);
  }

  if (phone1Value === "") {
    setErrorFor(phone1, "Phone number can not be blank");
    return false;
  } else if (phone1.value.length === 13) {
    setSuccessFor(phone1);
  } else {
    setErrorFor(phone1, "Wrong format of phone number");
    return false;
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone number can not be blank");
    return false;
  } else if (phone.value.length === 13) {
    setSuccessFor(phone);
  } else {
    setErrorFor(phone, "Wrong format of phone number");
    return false;
  }

  if (cardNumberValue === "") {
    setErrorFor(cardNumber, "Card number can not be blank");
    return false;
  } else if (cardNumber.value.length === 16) {
    setSuccessFor(cardNumber);
  } else {
    setErrorFor(cardNumber, "Wrong format of card number");
    return false;
  }

  if (expityMonthValue === "") {
    setErrorFor(expityMonth, "Expity month can not be blank");
    return false;
  } else if (expityMonth.value.length === 2) {
    setSuccessFor(expityMonth);
  } else {
    setErrorFor(expityMonth, "Wrong format of expity month");
    return false;
  }

  if (expityYearValue === "") {
    setErrorFor(expityYear, "Expity year can not be blank");
    return false;
  } else if (expityYear.value.length === 2) {
    setSuccessFor(expityYear);
  } else {
    setErrorFor(expityYear, "Wrong format of expity year");
    return false;
  }

  if (cvCodeValue === "") {
    setErrorFor(cvCode, "CV code can not be blank");
    return false;
  } else if (cvCode.value.length === 3) {
    setSuccessFor(cvCode);
  } else {
    setErrorFor(cvCode, "Wrong format of CV code");
    return false;
  }

  if (usernameValue === "") {
    setErrorFor(username, "Username can not be blank");
    return false;
  } else {
    setSuccessFor(username);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password can not be blank");
    return false;
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password can not be blank");
    return false;
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords do not match");
    return false;
  } else {
    setSuccessFor(password2);
  }
  return true;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  console.log(formControl, small);
  //add error mesage inside small
  small.innerText = message;

  //add error class
  formControl.classList.add("error");
  formControl.classList.remove("success");
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");
}

var number = document.querySelectorAll(".number");
number.forEach((number) => {
  number.addEventListener("keypress", function (e) {
    var key = e.which;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  });
});

var monthtext = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
function populatedropdown(dayfield, monthfield, yearfield) {
  var today = new Date();
  var dayfield = document.getElementById(dayfield);
  var monthfield = document.getElementById(monthfield);
  var yearfield = document.getElementById(yearfield);
  for (var i = 0; i < 31; i++) dayfield.options[i] = new Option(i + 1, i + 1);
  dayfield.options[today.getDate() - 1].selected = true;
  for (var m = 0; m < 12; m++)
    monthfield.options[m] = new Option(monthtext[m], monthtext[m]);
  monthfield.options[today.getMonth()].selected = true;
  var thisyear = today.getFullYear();
  for (var y = 0; y < 20; y++) {
    yearfield.options[y] = new Option(thisyear, thisyear);
    thisyear += 1;
  }
  yearfield.options[0] = new Option(
    today.getFullYear(),
    today.getFullYear(),
    true,
    true
  ); //select today's year
}
onload = function () {
  populatedropdown("d", "m", "y");
};
/*
function test() {
  if (document.getElementById("same").checked) {
    document.getElementById("hide").hide;
  } else {
    document.getElementById("hide").show;
  }
} */

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkInputs()) {
    localStorage.setItem("model", model.value);
    localStorage.setItem("fName1", fName1.value);
    localStorage.setItem("fName", fName.value);
    localStorage.setItem("sName1", sName1.value);
    localStorage.setItem("sName", sName.value);
    localStorage.setItem("street1", street1.value);
    localStorage.setItem("street", street.value);
    localStorage.setItem("state1", state1.value);
    localStorage.setItem("state", state.value);
    localStorage.setItem("zip1", zip1.value);
    localStorage.setItem("zip", zip.value);
    localStorage.setItem("phone1", phone1.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("cardNumber", cardNumber.value);
    localStorage.setItem("expityMonth", expityMonth.value);
    localStorage.setItem("expityYear", expityYear.value);
    localStorage.setItem("cvCode", cvCode.value);
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("password2", password2.value);
    location.href = "result.html";
  }
});
