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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

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
  } else {
    setSuccessFor(model);
  }

  if (fName1Value === "") {
    setErrorFor(fName1, "Name can not be blank");
  } else {
    setSuccessFor(fName1);
  }

  if (fNameValue === "") {
    setErrorFor(fName, "Name can not be blank");
  } else {
    setSuccessFor(fName);
  }

  if (sName1Value === "") {
    setErrorFor(sName1, "Name can not be blank");
  } else {
    setSuccessFor(sName1);
  }

  if (sNameValue === "") {
    setErrorFor(sName, "Name can not be blank");
  } else {
    setSuccessFor(sName);
  }

  if (street1Value === "") {
    setErrorFor(street1, "Street can not be blank");
  } else {
    setSuccessFor(street1);
  }

  if (streetValue === "") {
    setErrorFor(street, "Street can not be blank");
  } else {
    setSuccessFor(street);
  }

  if (state1Value === "") {
    setErrorFor(state1, "State can not be blank");
  } else {
    setSuccessFor(state1);
  }

  if (stateValue === "") {
    setErrorFor(state, "State can not be blank");
  } else {
    setSuccessFor(state);
  }

  if (zip1Value === "") {
    setErrorFor(zip1, "Zip code can not be blank");
  } else {
    setSuccessFor(zip1);
  }

  if (zipValue === "") {
    setErrorFor(zip, "Zip code can not be blank");
  } else {
    setSuccessFor(zip);
  }

  if (phone1Value === "") {
    setErrorFor(phone1, "Phone number can not be blank");
  } else if (phone1.value.length === 13) {
    setSuccessFor(phone1);
  } else {
    setErrorFor(phone1, "Wrong format of phone number");
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone number can not be blank");
  } else if (phone.value.length === 13) {
    setSuccessFor(phone);
  } else {
    setErrorFor(phone, "Wrong format of phone number");
  }

  if (cardNumberValue === "") {
    setErrorFor(cardNumber, "Card number can not be blank");
  } else if (cardNumber.value.length === 16) {
    setSuccessFor(cardNumber);
  } else {
    setErrorFor(cardNumber, "Wrong format of card number");
  }

  if (expityMonthValue === "") {
    setErrorFor(expityMonth, "Expity month can not be blank");
  } else if (expityMonth.value.length === 2) {
    setSuccessFor(expityMonth);
  } else {
    setErrorFor(expityMonth, "Wrong format of expity month");
  }

  if (expityYearValue === "") {
    setErrorFor(expityYear, "Expity year can not be blank");
  } else if (expityYear.value.length === 2) {
    setSuccessFor(expityYear);
  } else {
    setErrorFor(expityYear, "Wrong format of expity year");
  }

  if (cvCodeValue === "") {
    setErrorFor(cvCode, "CV code can not be blank");
  } else if (cvCode.value.length === 3) {
    setSuccessFor(cvCode);
  } else {
    setErrorFor(cvCode, "Wrong format of CV code");
  }

  if (usernameValue === "") {
    setErrorFor(username, "Username can not be blank");
  } else {
    setSuccessFor(username);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password can not be blank");
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
number.addEventListener("keypress", function (e) {
  var key = e.which;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
});