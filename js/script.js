// Login or Register
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');
registrationForm.style.display = 'none';
const optionsHR = document.getElementById('options-hr');

showLogin = () => {
     loginForm.style.display = 'flex';
     registrationForm.style.display = 'none';
     optionsHR.style.transform = 'translateX(25px)';
}

showRegistration = () => {
     loginForm.style.display = 'none'
     registrationForm.style.display = 'flex';
     optionsHR.style.transform = 'translateX(145px)';
}