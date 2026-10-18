/** Function to make logos slide  */
const warning_note = localStorage.getItem('warning_important')
console.log(warning_note)

const logos = document.querySelector(".sliding-logos__track").cloneNode(true)
document.querySelector(".sliding-logos").appendChild(logos)

var i_am_a_developer = false;
const developer_tools = JSON.parse(localStorage.getItem('i_am_a_developer'));
if (developer_tools) {
    i_am_a_developer = developer_tools;
}

const email_input = document.getElementById('email-input');
const username_input = document.getElementById('username-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {

    let errors = [];

    if(repeat_password_input) {
        // if we have a repeat password input then we are in the sign up page
        errors = getSignupFormErrors(email_input.value, username_input.value, password_input.value, repeat_password_input.value)
    } else {
        // if we don't have a repeat password input then were are in the login page
        errors = getLoginFormErrors(username_input.value, password_input.value)
    }
    
    if (errors.length > 0) {
        // If there are any errors, prevent the form from being submitted
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
    
})

function getSignupFormErrors(email, username, password, repeatPassword) {
    let errors = []

    errors.push('STOP trying to sign up, this Website is still under HEAVY CONSTRUCTION!');

    if(email === '' || email == null) {
        errors.push('Email name is required!')
        email_input.parentElement.classList.add('incorrect');
    }
    if(username === '' || username == null) {
        errors.push('Username is required!')
        username_input.parentElement.classList.add('incorrect');
    }
    if(password === '' || password == null) {
        errors.push('A password is required!')
        password_input.parentElement.classList.add('incorrect');
    }
    if(repeatPassword === '' || repeatPassword == null) {
        errors.push('You need to confirm your password!')
        repeat_password_input.parentElement.classList.add('incorrect');
    }
    // check if password is the same as the repeated password
    if(password !== repeatPassword) {
        errors.push('Your password does not match your repeated password!')
        password_input.parentElement.classList.add('incorrect');
        repeat_password_input.parentElement.classList.add('incorrect');
    }
    // checks if your password is too short
    if (password.length < 8) {
        errors.push('Password must have at least 8 characters')
        password_input.parentElement.classList.add('incorrect');
    }


    return errors;
}

function getLoginFormErrors (username, password) {
    let errors = []

    errors.push('STOP trying to login in, this Website is still under HEAVY CONSTRUCTION!');
    
    if(username === '' || username == null) {
        errors.push('Username is required!')
        username_input.parentElement.classList.add('incorrect');
    }
    if(password === '' || password == null) {
        errors.push('A password is required!')
        password_input.parentElement.classList.add('incorrect');
    }


    return errors;
}


const allInputs = [username_input, email_input, password_input, repeat_password_input].filter(input => input!= null)

allInputs.forEach (input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})
