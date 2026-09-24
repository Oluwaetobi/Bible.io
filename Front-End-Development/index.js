const warning_note = localStorage.getItem('warning_important')
console.log(warning_note)

/**First of all if you think I write comments for fun, you are making a huge mistake, these comments are not
 * just for me but I write comments so that if anyone looks at the code in this game, they can understand
 * things that won't come to mind initially, PLEASE READ THE COMMENTS, they explain some of the methods
 * I'm using, and why I am doing what I am doing, no matter how good you are at coding, you willl always
 * forget why you did something a particular way, every good coder, writes good comments, a wise man once said
 * the faintest pen is better than the sharpest memory, and why is that, because even if you write something
 * faintly as long as you know how to read, it is engraved forever and can always be read, but no matter
 * how good your memory is, you always forget it at some point so START WRITING COMMENTS WHEN YOU CODE!!
 */

// This code is for the sign up page

var i_am_a_developer = false;
const developer_tools = JSON.parse(localStorage.getItem('i_am_a_developer'));
if (developer_tools) {
    i_am_a_developer = developer_tools;
}

const form = document.getElementById('form');
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

// console.log(email_input.parentElement.classList);

/* The code here doesn't even seem to be working properly, perhaps because of some browser
addon that prevents the form from being submitted by itself if blanks are not filled out, 
it's supposed to turn red if the fields are empty
once I push 'incorrect' into the id of an input, it's supposed to turn red  */

// form.parentElement.classList.add('incorrect');
// console.log(form.parentElement.classList);

/*the filter part filters out any inputs that are not there, so if it's in the login page it will filter out
email input as well as repeat password input, these guards against unnecesary inputs and unnecessary
elements in the array, and it's also faster since I don't have to hard code everything again*/ 
const allInputs = [username_input, email_input, password_input, repeat_password_input].filter(input => input!= null)

allInputs.forEach (input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})


/** Function to make logos slide  */
const logos = document.querySelector(".sliding-logos__track").cloneNode(true)
document.querySelector(".sliding-logos").appendChild(logos)