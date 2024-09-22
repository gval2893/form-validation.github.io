var firstNameInput = document.querySelector("#fname");
var lastNameInput = document.querySelector("#lname");
var emailInput = document.querySelector("#email");
var phoneNumberInput = document.querySelector("#phnumb");

var messageValidationFirstName = document.getElementById(
  "fnameValidationMessage"
);
var messageValidationLastName = document.getElementById(
  "lnameValidationMessage"
);

var messageValidationEmail = document.getElementById("emailValidationMessage");

var messageValidationPhoneNumber = document.getElementById(
  "phnumbValidationMessage"
);

// const submitButton = document.querySelector("#buttonDiv input");

function setInnerText(validationElement, text) {
  validationElement.innerText = text;
}

function letterCharValidation(
  input,
  validationElement,
  validationEmptyMessage,
  validationErrorMessage,
  validationSuccessMessage
) {
  var value = input.value;
  //   Regex Verification
  var namePattern = /^[a-zA-Z\s-]+$/;

  if (value === "") {
    console.log("This field must be filled out");
    validationElement.innerText = validationEmptyMessage;
    input.style.cssText = "border: 2px solid red";
  } else {
    if (!namePattern.test(value)) {
      console.log("You must use only letters");
      validationElement.innerText = validationErrorMessage;
      input.style.cssText = "border: 2px solid red";
    } else {
      console.log("All correct!");
      validationElement.innerText = validationSuccessMessage;
      input.style.cssText = "border: 2px solid green";
    }
  }
}

function emailValidation(
  input,
  validationElement,
  validationEmptyMessage,
  validationErrorMessage,
  validationSuccessMessage
) {
  var value = input.value;
  //   Regex Verification
  var namePattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (value === "") {
    console.log("This field must be filled out");
    validationElement.innerText = validationEmptyMessage;
    input.style.cssText = "border: 2px solid red";
  } else {
    if (!namePattern.test(value)) {
      console.log("You must use valid email");
      validationElement.innerText = validationErrorMessage;
      input.style.cssText = "border: 2px solid red";
    } else {
      console.log("All correct!");
      validationElement.innerText = validationSuccessMessage;
      input.style.cssText = "border: 2px solid green";
    }
  }
}

function phoneNumberValidation(
  input,
  validationElement,
  validationEmptyMessage,
  validationErrorMessage,
  validationSuccessMessage
) {
  var value = input.value;
  //   Regex Verification
  var namePattern = /^\d{9}$/;

  if (value === "") {
    console.log("This field must be filled out");
    validationElement.innerText = validationEmptyMessage;

    input.style.cssText = "border: 2px solid red";
  } else {
    if (!namePattern.test(value)) {
      console.log("You must use valid number");
      validationElement.innerText = validationErrorMessage;

      input.style.cssText = "border: 2px solid red";
    } else {
      console.log("All correct!");
      validationElement.innerText = validationSuccessMessage;

      input.style.cssText = "border: 2px solid green";
    }
  }
}

function subscribeToInputEvent(
  input,
  eventName,
  validationElement,
  validationEmptyMessage,
  validationErrorMessage,
  validationSuccessMessage,
  validationFunc
) {
  input.addEventListener(eventName, () => {
    validationFunc(
      input,
      validationElement,
      validationEmptyMessage,
      validationErrorMessage,
      validationSuccessMessage
    );
  });
}

subscribeToInputEvent(
  firstNameInput,
  "input",
  messageValidationFirstName,
  "*This field must be filled out",
  "*You must use only letters",
  "All correct!",
  letterCharValidation
);

subscribeToInputEvent(
  firstNameInput,
  "focus",
  messageValidationFirstName,
  "*This field must be filled out",
  "*You must use only letters",
  "All correct!",
  letterCharValidation
);

subscribeToInputEvent(
  lastNameInput,
  "input",
  messageValidationLastName,
  "*This field must be filled out",
  "*You must use only letters",
  "All correct!",
  letterCharValidation
);

subscribeToInputEvent(
  lastNameInput,
  "focus",
  messageValidationLastName,
  "*This field must be filled out",
  "*You must use only letters",
  "All correct!",
  letterCharValidation
);

subscribeToInputEvent(
  emailInput,
  "input",
  messageValidationEmail,
  "*This field must be filled out",
  "*You must use valid email",
  "All correct!",
  emailValidation
);

subscribeToInputEvent(
  emailInput,
  "focus",
  messageValidationEmail,
  "*This field must be filled out",
  "*You must use valid email",
  "All correct!",
  emailValidation
);

subscribeToInputEvent(
  phoneNumberInput,
  "input",
  messageValidationPhoneNumber,
  "*This field must be filled out",
  "*You must use valid number",
  "All correct!",
  phoneNumberValidation
);

subscribeToInputEvent(
  phoneNumberInput,
  "focus",
  messageValidationPhoneNumber,
  "*This field must be filled out",
  "*You must use valid number",
  "All correct!",
  phoneNumberValidation
);
