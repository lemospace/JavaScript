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

  if (modelValue === "model") {
    // show error
    // add error class
    setErrorFor(model, "The item is not selected");
  } else {
    // add succes class
    setSuccessFor(model);
  }

  if (fName1Value === "") {
    // show error
    // add error class
    setErrorFor(fName1, "Name can not be blank");
  } else {
    // add succes class
    setSuccessFor(fName1);
  }

  if (fNameValue === "") {
    // show error
    // add error class
    setErrorFor(fName, "Name can not be blank");
  } else {
    // add succes class
    setSuccessFor(fName);
  }

  if (sName1Value === "") {
    // show error
    // add error class
    setErrorFor(sName1, "Name can not be blank");
  } else {
    // add succes class
    setSuccessFor(sName1);
  }

  if (sNameValue === "") {
    // show error
    // add error class
    setErrorFor(sName, "Name can not be blank");
  } else {
    // add succes class
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
  } else {
    setSuccessFor(phone1);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone number can not be blank");
  } else {
    setSuccessFor(phone);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

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

const submitBtn = document.querySelector("#submit");
