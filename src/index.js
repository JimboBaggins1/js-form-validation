import "./style.css";

// get form elements
const email = document.getElementById("email");
const country = document.getElementById("country");
const postCode = document.getElementById("post-code");
const pwd = document.getElementById("pwd");
const confPwd = document.getElementById("confirmPwd");

// get error elements
const emailError = document.querySelector("#email + span.error");
const countryError = document.querySelector("#country + span.error");
const codeError = document.querySelector("#post-code + span.error");
const pwdError = document.querySelector("#pwd + span.error");
const confPwdError = document.querySelector("#confirmPwd + span.error");
