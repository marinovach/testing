const form = document.querySelector("#form");
const pname = document.querySelector("#pname");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordTwo = document.querySelector("#confirmpassword");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const pnameValue = pname.value.trim();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordTwoValue = passwordTwo.value.trim();

if (pnameValue === '') {
    setErrorFor(pname, 'A first name is required');
  }
else if(!isName(pnameValue)) {
  setErrorFor(pname, 'Invalid name entry');
}  
else {
    setSuccessFor(pname);
  };
if (usernameValue === '') {
    setErrorFor(username, 'Username is required');
  }
else {
    setSuccessFor (username);
  };
if (emailValue === '') {
  setErrorFor(email, 'Email is required');
}
else if(!isEmail(emailValue)) {
  setErrorFor(email, 'Invalid email entry')
}
else {
    setSuccessFor(email)
};
if (passwordValue === '') {
    setErrorFor(password, 'Password is required');
  }
else {
    setSuccessFor (password);
  };
if (passwordTwoValue === '') {
  setErrorFor(passwordTwo, 'Password is required')
}
else if (passwordValue !== passwordTwoValue) {
  setErrorFor(passwordTwo, 'Password does not match')
}
else {
  setSuccessFor(passwordTwo)
}
}

function setErrorFor(input, message) {
  const formLines = input.parentElement;
  const small = formLines.querySelector('small');
  small.innerText = message;
  formLines.className = 'form-lines error'
}

function setSuccessFor(input) {
  const formLines = input.parentElement;
  formLines.className = 'form-lines success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isName(pname) {
  return /^[a-z ,.'-]+$/i.test(pname)
}


function btnNewsletter() {
  alert('Thank you! We will keep you updated.')
}
