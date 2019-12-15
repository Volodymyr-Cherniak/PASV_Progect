const { url } = require('../constants.js');
const { user } = require('../constants.js');
const { sel } = require('../selectors.js');


function Login(browser){
    browser.url(url.loginUrl);
    browser.pause(1000);
    const emailField = $(sel.login.emailInputField);
    const passwordField = $(sel.login.passwordInputField);
    const button = $(sel.login.loginButton);


    emailField.setValue(user.admin.email);
    passwordField.setValue(user.admin.password);
    browser.pause(2000);
    button.click();
};


module.exports = Login;
