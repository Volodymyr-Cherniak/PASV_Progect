const assert = require('chai').assert;
const Login = require('../helpers/email');

describe('Login', () => {

    before(() => {
        browser.url('https://stage.pasv.us/user/login')
    });

    it('should email', () =>{
        Login(browser);

    });
});

describe('PASV main page', () => {

    it('should have the right title', () => {
        const selector = '//span[@id="site-name"]';
        const actual = $(selector).getText();
        const expected = 'Progress Monitor';

        assert.equal(actual, expected);
    });
});
