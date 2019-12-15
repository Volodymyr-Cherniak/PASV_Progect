const sel = {
    h1: '//h1',
    emailInputField: '//input[@name="email"]',
    login: {
        emailInputField: '//input[@name="email"]',
        passwordInputField: '//input[@name="password"]',
        loginButton: '//button[@class="btn btn-primary"]'
    },
    register: {
        h1_Name: '//h1[text() = \'User Register\']',
        firstNameField: '//input[@name="firstName"]',
        lastNameField: '//input[@name=\'lastName\']',
        phoneField: '//input[@name=\'phone\']',
        emailField: '//input[@name=\'email\']',
        passwordField: '//input[@name=\'password\']',
        aboutTextField: '//textarea[@placeholder="I\'m ..."]',
        myGoalsField: '//textarea[@placeholder=\'1... 2... 3...\']',
        englishLevelField: '//select[@name=\'englishLevel\']',
        submitButton: '//button[text() = \'Submit\']'
    }
};

module.exports = { sel };
