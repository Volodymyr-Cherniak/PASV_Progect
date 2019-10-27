const { assert } = require('chai');
const { user, url } = require('./../../../../constants.js');
const { sel } = require('./../../../../selectors.js');
const { exp } = require('./../../../../expecteds.js');


describe('User -- Login Form -- Design', () => {
    before(()=>{
        browser.url(url.loginUrl);
    });

    it('should be validate h1 is displayed', function () {
        const h1 = $(sel.h1);
        const isDisplayed = h1.isDisplayed();
        assert.isTrue(isDisplayed);
    });

    it('should be have corect h1 color ', function () {
        const actual = $(sel.h1).getCSSProperty('color').parsed.hex;
        const expected = exp.h1Colors;
        assert.equal(actual, expected);
    });

    it('should be corect borderColor in empty emailField', function () {
        let actualBorderColor = $(sel.emailInputField).getCSSProperty('border-color').parsed.hex;
        let expectedBorderColor = exp.emailInputFieldEmptyBorderColor;
        assert.equal(actualBorderColor, expectedBorderColor);
    });

    it('should be correct borderColor with corect value in emailField', function () {
        $(sel.emailInputField).setValue(user.admin.login);
        browser.keys('Tab');
        browser.pause(200);
        let actualBorderColor = $(sel.emailInputField).getCSSProperty('border-color').parsed.hex;
        let expectedBorderColor = exp.emailInputFieldWithValueBorderColor;
        assert.equal(actualBorderColor, expectedBorderColor);
    });


    it('should be correct borderColor with incorect  value in emailField', function () {
        $(sel.emailInputField).setValue('user.admin.login');
        browser.keys('Tab');
        let actualBorderColor = $(sel.emailInputField).getCSSProperty('border-color');
        let expectedBorderColor = exp.emailInputFieldWithIncorectValueBorderColor;
        assert.property(actualBorderColor, expectedBorderColor);
    });

});
