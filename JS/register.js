const form = document.getElementById('form');
const firstname = document.getElementById('first-name');
const lastname = document.getElementById('last-name');
var phoneNumber = document.getElementById('phone-number');
const email = document.getElementById('email');
var password = document.getElementById('password');
var checkBOX = document.getElementById('check-box');


function inputError(input, message) {
  const formlayout = input.parentElement;
  formlayout.className = 'form-layout error';

  const errorMessage = formlayout.querySelector('p');
  errorMessage.innerText = message;
}


function inputSuccess(input) {
  formlayout = input.parentElement;
  formlayout.className = 'form-layout success';
}


// Check Validation
function checkFirstName(input) {
  if (input.value.length < 3) {
    inputError(input, 'First name must be at least 3 characters long');
  }else {
    inputSuccess(input)
  }
}

function checkLastName(input) {

  if (input.value.length < 3) {
    inputError(input, 'Last name must cannot be blank');
  }else {
    inputSuccess(input)
  }
}


function checkPhoneNumber(input) {
  if (input.value.length < 12 || input.value.length > 13) {
    inputError(input, 'Invalid phone number');
  }else {
    inputSuccess(input);
  }
}


function checkEmail(input) {

  if (input.value.length === 0) {
    inputError(input, 'Email address cannot be empty');
  } else if (input.value.indexOf("@") === -1) {
    inputError(input, 'Invalid email address');
  }else if(input.value.endsWith("gmail.com") === true) {
    inputSuccess(input);
  }else if(input.value.endsWith("outlook.com") === true) {
    inputSuccess(input);
  }else if(input.value.endsWith("yahoo.com") === true) {
    inputSuccess(input);
  }else if(input.value.endsWith("icloud.com") === true) {
    inputSuccess(input);
  }else {
    inputError(input, 'Invalid email address');
  }
}

function checkPassword(input) { 
  if (input.value.length < 8 || input.value.length > 25) {
    inputError(input, 'Password must be at least 8 to 25 characters long');
  } else if (input.value.indexOf("1") === -1 && input.value.indexOf("2") === -1 && input.value.indexOf("3") === -1 && input.value.indexOf("4") === -1 && input.value.indexOf("5") === -1 && input.value.indexOf("6") === -1 && input.value.indexOf("7") === -1 && input.value.indexOf("8") === -1 && input.value.indexOf("9") === -1 && input.value.indexOf("0") === -1) {
    inputError(input, 'Password must include ONE number');
  } else if (input.value.indexOf("-") === -1 && input.value.indexOf("_") === -1 && input.value.indexOf("$") === -1 && input.value.indexOf("*") === -1 && input.value.indexOf(".") === -1) {
    inputError(input, 'Password must include ONE of the special chracters (-_.*$)');
  } else {
    inputSuccess(input)
  }
}

function checkBox(input) {
  if (input.checked === true) {
    inputSuccess(input)
  }else {
    inputError(input, 'Please agree to the Terms & Conditons');
  }
}


// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkFirstName(firstname);
  checkLastName(lastname);
  checkPhoneNumber(phoneNumber);
  checkEmail(email);
  checkPassword(password);
  checkBox(checkBOX);
})