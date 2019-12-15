const { expect } = require('chai');
const { url, user } = require('./../../../../constants');
const { sel } = require('./../../../../selectors');
const { axios } = require('axios');


const elements = {
    registerButton: {
        selector: "//div[@id='user-section']/ul/li/a[text() = 'Register']"
    },
    registerForm:{
        title: 'User Register'
    }
};
describe('User -- RegisterForm -- func -- Form is dispayed', () => {
    before(()=>{
        browser.url(url.baseUrl);
    })

    it('should validate register btn is displayed on the top', function () {
        const btnRegister = $(elements.registerButton.selector);
        expect(btnRegister.isDisplayed()).true;
        }
    );

    it('should redirect to regiser form after click btn Register', function () {
        const btnRegister = $(elements.registerButton.selector);
        btnRegister.click();
        const elem = $(sel.register.h1_Name);
        elem.waitForDisplayed();
        const text = elem.getText();
        expect(text).eql('User Register');
    });

    it('should have correct url', function () {
        const currentUrl = browser.getUrl();
        expect(currentUrl).to.eql(url.registerUrl);
    });

    it('should have first name field', function () {
        const firstNameField = $(sel.register.firstNameField);
        expect(firstNameField.isDisplayed()).true;
    });

    it('should have last name field', function () {
        const lastNameField = $(sel.register.lastNameField);
        expect(lastNameField.isDisplayed()).true;
    });

    it('should have cell phone field', function () {
        const cellphone = $(sel.register.phoneField);
        expect(cellphone.isDisplayed()).true;
    });

    it('should have email field', function () {
        const emailField = $(sel.register.emailField);
        expect(emailField.isDisplayed()).true;
    });

    it('should have password field', function () {
        const passwordField = $(sel.register.passwordField);
        expect(passwordField.isDisplayed()).true;
    });

    it('should have About field', function () {
        const about = $(sel.register.aboutTextField);
        expect(about.isDisplayed()).true;
    });

    it('should have My Goals field', function () {
        const myGoals = $(sel.register.myGoalsField);
        expect(myGoals.isDisplayed()).true;
    });

    it('should have My English level field', function () {
        const englishLevel = $(sel.register.englishLevelField);
        expect(englishLevel.isDisplayed()).true;
    });

    it('should have Submit btn', function () {
        const sumitButn = $(sel.register.submitButton);
        expect(sumitButn.isDisplayed()).true;
    });
});

describe('User -- RegisterForm -- func -- register new user', () => {

    // before(() => {
    //    return axios.post(`${url.serverUrl}/user/login`,{
    //        email: user.admin.email,
    //        password: user.admin.password
    //     }).then(response => {
    //         console.log(response);
    //     }).catch(err => {
    //        console.log(err);
    //    });
    // });

    it('should check Submit btn is disable', function () {
        const btn = $(sel.register.submitButton).isEnabled();
        expect(btn).to.be.false;
    });

    it('should set value in first name field', function () {
        const firstName = $(sel.register.firstNameField);
        firstName.setValue(user.student.name.firstName);
    });

    it('should set value in last name field', function () {
        const lastName = $(sel.register.lastNameField);
        lastName.setValue(user.student.name.lastName);
    });

    it('should set value in Cell Phone field', function () {
        const phone = $(sel.register.phoneField);
        phone.setValue(user.student.phone);
    });

    it('should set value in email field', function () {
        const email = $(sel.register.emailField);
        email.setValue(user.student.email);
    });

    it('should set value in password field', function () {
        const pass = $(sel.register.passwordField);
        pass.setValue(user.student.password);
    });

    it('should set value in About field', function () {
        const about = $(sel.register.aboutTextField);
        about.setValue(user.student.about);
    });

    it('should set value in my goals field', function () {
        const myGoals = $(sel.register.myGoalsField);
        myGoals.setValue(user.student.goals);
    });

    it('should choise el in dropdown field', function () {
        const englishLevel = $(sel.register.englishLevelField);
        englishLevel.selectByVisibleText('Elementary');
    });

    it('should check Submit btn is enable', function () {
        const btn = $(sel.register.submitButton).isEnabled();
        expect(btn).to.be.true;
    });

    it('should click on btn submit', function () {
        const btn = $(sel.register.submitButton);
        btn.click();
    });

    browser.debug();
});

