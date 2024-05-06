import "./style.css";

// get form elements
const email = document.getElementById("email");
const country = document.getElementById("country");
const postCode = document.getElementById("post-code");
const pwd = document.getElementById("pwd");
const confPwd = document.getElementById("confirmPwd");

// get error elements
// const emailError = document.querySelector("#email + span.error");
// const countryError = document.querySelector("#country + span.error");
// const codeError = document.querySelector("#post-code + span.error");
// const pwdError = document.querySelector("#pwd + span.error");
// const confPwdError = document.querySelector("#confirmPwd + span.error");

// set event listeners
window.addEventListener("focusout", (event) => {
  const target = event.target;
  switch (target.id) {
    case "email":
      checkValid(target.id);
      break;
    case "country":
      checkValid(target.id);
      break;
    case "post-code":
      checkValid(target.id);
      break;
    case "pwd":
      checkValid(target.id);
      break;
    case "confirmPwd":
      checkValid(target.id);
      break;
    default:
      break;  
  }
});

//change to generic check valid func
function checkValid(identifier) {
  const formElem = document.getElementById(identifier);
  const formError = document.querySelector(`#${identifier} + span.error`);
  if (formElem.validity.valid) {
    formError.textContent = "";
    formError.className = "error";
  } else {
    showError(identifier);
  }
}

// function checkEmailValid() {
//   if (email.validity.valid) {
//     emailError.textContent = "";
//     emailError.className = "error";
//   } else {
//     showEmailError();
//   }
// }

function showError(errorType) {
  const formElem = document.getElementById(errorType);
  const errorElem = document.querySelector(`#${errorType} + span.error`);
  console.log(typeof errorType.slice(0, 1));
  console.log(errorElem);
  if (formElem.validity.valueMissing) {
    errorElem.textContent = `You need to enter ${errorType.slice(0, 1).match(/[aeiouAEIOU]/) ? 'an' : 'a'} ${errorType}.`
  } else if (formElem.validity.typeMismatch) {
    // If entered value isn't an email address
    // display following error message
    errorElem.textContent = `Entered value needs to be ${errorType.slice(0, 1).match(/[aeiouAEIOU]/) ? 'an' : 'a'} ${errorType}.`
  } else if (formElem.validity.tooShort) {
    // If email is less than required length
    // display following error message
    errorElem.textContent = `Minimum ${errorType} length is ${formElem.minLength} characters, you have entered ${formElem.value.length}.`
  }

  errorElem.className = 'error active';
}

// function showEmailError() {
//   if (email.validity.valueMissing) {
//     // If the field is empty,
//     // display following error message
//     emailError.textContent = 'You need to enter an email address';
//   } else if (email.validity.typeMismatch) {
//     // If entered value isn't an email address
//     // display following error message
//     emailError.textContent = 'Entered value needs to be an email address'
//   } else if (email.validity.tooShort) {
//     // If email is less than required length
//     // display following error message
//     emailError.textContent = `Minimum email length is ${email.minLength} characters, you have entered ${email.value.length}.`
//   }

//   // set error class as active
//   emailError.className = 'error active';
// }
