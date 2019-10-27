const sel = {
    h1: '//h1',
    emailInputField: '//input[@name="email"]',
    login: {
        emailInputField: '//input[@name="email"]',
        passwordInputField: '//input[@name="password"]',
        loginButton: '//button[@class="btn btn-primary"]'
    },
    register: {
        firstNameField: '//input[@name="firstName"]',
        lastNameField: '//input[@name=\'lastName\']',
        phoneField: '//input[@name=\'phone\']',
        emailField: '//input[@name=\'email\']',
        passwordField: '//input[@name=\'password\']',
        aboutTextField: '//textarea[@placeholder="I\'m ..."]',
        myGoalsField: '//textarea[@placeholder=\'1... 2... 3...\']',
        englishLevelField: '//select[@name=\'englishLevel\']',
        submitButton: '//button[@class=\'btn btn-primary disabled\']'
    }
};

module.exports = { sel };
