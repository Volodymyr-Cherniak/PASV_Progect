const {url} = require('../constants.js');
const {user} = require('../constants.js');
const {sel} = require('../selectors.js');

function Register(browser) {
    browser.url(url.registerUrl);
    browser.pause(1000);

    const firstName = $(sel.register.firstNameField);
    const lastName = $(sel.register.lastNameField);
    const phone = $(sel.register.phoneField);
    const email = $(sel.register.emailField);
    const password = $(sel.register.passwordField);
    const about = $(sel.register.aboutTextField);
    const myGoals = $(sel.register.myGoalsField);
    const englishLevel = $(sel.register.englishLevelField);
    const submitButton = $(sel.register.submitButton);

    firstName.setValue(user.student.name.firstName);
    lastName.setValue(user.student.name.lastName);
    phone.setValue(user.student.phone);
    email.setValue(user.student.login);
    password.setValue(user.student.password);
    about.setValue(user.student.about);
    myGoals.setValue(user.student.goals);
    englishLevel.selectByVisibleText('Elementary');
    browser.pause(1500);

    submitButton.click();
    browser.pause(1000);


};

module.exports = Register;
