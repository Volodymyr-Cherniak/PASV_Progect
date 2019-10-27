assert = require('chai').assert;
const Login = require('../helpers/login.js');

describe('Login', () => {

    it('should login', () =>{
        Login(browser);

    });
});

describe('PASV main page', () => {
    before(()=>{
        browser.url('https://app.pasv.us/');
    });

    it('should have the right title', () => {
        const selector = '//span[@id="site-name"]';
        const actual = $(selector).getText();
        const expected = 'Progress Monitor';

        assert.equal(actual, expected);
    });

    it('footer have a right name', () => {
        const selector = `//small[@class="d-block mb-3 text-muted"]`;
        const actual = $(selector).getText();
        const curentYear = '2019';

        assert.include(actual, curentYear);
    });

    it('should have right color title', () => {
        const selector = '//span[@id="site-name"]';
        const actual = $(selector).getCSSProperty('color').parsed.hex;
        const expected = '#000000';
        assert.equal(actual, expected);
    });
});
