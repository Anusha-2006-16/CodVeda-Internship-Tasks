const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const successMessage = document.querySelector('.success-message');

 
function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error');
    error.textContent = message;
    input.classList.add('invalid');
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error');
    error.textContent = '';
    input.classList.remove('invalid');
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[0-9]{10}$/.test(phone);
}

function isValidPassword(password) {
    
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

 
[nameInput, emailInput, phoneInput, passwordInput].forEach(input => {
    input.addEventListener('blur', () => validateInput(input));
});

function validateInput(input) {
    const value = input.value.trim();
    switch(input.id) {
        case 'name':
            value === '' ? showError(input, 'Name is required') : showSuccess(input);
            break;
        case 'email':
            if(value === '') showError(input, 'Email is required');
            else if(!isValidEmail(value)) showError(input, 'Email is invalid');
            else showSuccess(input);
            break;
        case 'phone':
            if(value === '') showError(input, 'Phone number is required');
            else if(!isValidPhone(value)) showError(input, 'Phone must be 10 digits');
            else showSuccess(input);
            break;
        case 'password':
            if(value === '') showError(input, 'Password is required');
            else if(!isValidPassword(value)) showError(input, 'Password must be at least 6 chars with letters & numbers');
            else showSuccess(input);
            break;
    }
}
 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInput(nameInput);
    validateInput(emailInput);
    validateInput(phoneInput);
    validateInput(passwordInput);

    // Check if any input is invalid
    const invalid = form.querySelectorAll('.invalid');
    if(invalid.length === 0) {
        successMessage.textContent = 'Form submitted successfully!';
        form.reset();
    } else {
        successMessage.textContent = '';
    }
});
