//When user enters their username and password, "You are now logged in." message will appear
const button_LogIn = document.querySelector('#log-in');

button_LogIn.addEventListener('click', () => {
    alert('Welcome {user.name}, you are now logged in.')
});

//When user creates an account, "Your account was created successfully." message will appear
const button_CreateAccount = document.querySelector('#create-account');

button_CreateAccount.addEventListener('click', () => {
    alert('Hello {user.name}, your account was created successfully.')
});

