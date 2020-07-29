var form = document.getElementById("form");
var model = document.getElementById("longboards");
var comment = document.getElementById("comm");
var fName1 = document.getElementById("f-name1");
var fName = document.getElementById("f-name");
var sName1 = document.getElementById("s-name1");
var sName = document.getElementById("s-name");
var street1 = document.getElementById("street1");
var street = document.getElementById("street");
var state1 = document.getElementById("state1");
var state = document.getElementById("state");
var zip1 = document.getElementById("zip1");
var zip = document.getElementById("zip");
var phone1 = document.getElementById("phone1");
var phone = document.getElementById("phone");
var cardNumber = document.getElementById("cardNumber");
var expityMonth = document.getElementById("expityMonth");
var expityYear = document.getElementById("expityYear");
var cvCode = document.getElementById("cvCode");
var username = document.getElementById("username");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

function checkInputs() {
  // get the values from the inputs
  var modelValue = model.value.trim();
  var fName1Value = fName1.value.trim();
  var fNameValue = fName.value.trim();
  var sName1Value = sName1.value.trim();
  var sNameValue = sName.value.trim();
  var street1Value = street1.value.trim();
  var streetValue = street.value.trim();
  var state1Value = state1.value.trim();
  var stateValue = state.value.trim();
  var zip1Value = zip1.value.trim();
  var zipValue = zip.value.trim();
  var phone1Value = phone1.value.trim();
  var phoneValue = phone.value.trim();
  var cardNumberValue = cardNumber.value.trim();
  var expityMonthValue = expityMonth.value.trim();
  var expityYearValue = expityYear.value.trim();
  var cvCodeValue = cvCode.value.trim();
  var usernameValue = username.value.trim();
  var passwordValue = password.value.trim();
  var password2Value = password2.value.trim();

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
  var formControl = input.parentElement;
  var small = formControl.querySelector("small");
  console.log(formControl, small);
  //add error mesage inside small
  small.innerText = message;

  //add error class
  formControl.classList.add("error");
  formControl.classList.remove("success");
}

function setSuccessFor(input) {
  var formControl = input.parentElement;
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

$(document).ready(function () {
  dpick("#year", "#month", "#day", 1);
});

function dpick(year, month, day, td) {
  if (td == 1) {
    var today = new Date();
    $(year).val(today.getFullYear());
    $(month).val(today.getMonth());
  }
  $(year).change(function () {
    dpick(year, month, day);
  });
  $(month).change(function () {
    dpick(year, month, day);
  });
  var month_val = $(month).val();
  var i = 0;
  $(day).empty();
  if (month_val == "1") {
    if ($(year).val() % 4 == 0) {
      for (i = 1; i <= 29; i++) {
        $(day).append($("<option></option>").attr("value", i).text(i));
      }
    } else {
      for (i = 1; i <= 28; i++) {
        $(day).append($("<option></option>").attr("value", i).text(i));
      }
    }
  } else if (
    month_val == "8" ||
    month_val == "3" ||
    month_val == "5" ||
    month_val == "10"
  ) {
    for (i = 1; i <= 30; i++) {
      $(day).append($("<option></option>").attr("value", i).text(i));
    }
  } else {
    for (i = 1; i <= 31; i++) {
      $(day).append($("<option></option>").attr("value", i).text(i));
    }
  }
  if (td == 1) {
    $(day).val(today.getDate());
  }
}

$().ready(function () {
  $("#same").change("click", function () {
    if ($("#same").is(":checked")) {
      $(".hide").hide();
      checkInputs() = false;
    } else {
      $(".hide").show();
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkInputs()) {
    localStorage.setItem("model", model.value);
    localStorage.setItem("fName1", fName1.value);
    localStorage.setItem("sName1", sName1.value);
    localStorage.setItem("street1", street1.value);
    localStorage.setItem("state1", state1.value);
    localStorage.setItem("zip1", zip1.value);
    localStorage.setItem("phone1", phone1.value);
    localStorage.setItem("fName", fName.value);
    localStorage.setItem("sName", sName.value);
    localStorage.setItem("street", street.value);
    localStorage.setItem("state", state.value);
    localStorage.setItem("zip", zip.value);
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
