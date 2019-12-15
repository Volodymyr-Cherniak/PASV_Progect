const { assert } = require('chai');
const { Login } = require('../../../../helpers/login.js');
const { url } = require('./../../../../constants.js');
const { sel } = require('./../../../../selectors.js');
const { exp } = require('./../../../../expecteds.js');

describe('user -- loginForm -- func', () => {
    before(()=>{
        browser.url(url.loginUrl);
    });

    it('should have correct page', function () {
        let actualUrl = browser.getUrl();
        assert.equal(actualUrl, url.loginUrl);
    });

    it('should have correct h1', function () {
        const h1SelectorText = $(sel.h1).getText();
        const expected = exp.h1Text;
        assert.equal(h1SelectorText, expected);
    });
    // it('should email', () =>{
    //     Login(browser);
    //
    // });
});

// describe('PASV main page', () => {
//     before(()=>{
//         browser.url('https://app.pasv.us/');
//     });
//
//     it('should have the right title', () => {
//         const selector = '//span[@id="site-name"]';
//         const actual = $(selector).getText();
//         const expected = 'Progress Monitor';
//
//         assert.equal(actual, expected);
//     });
//
//     it('footer have a right name', () => {
//         const selector = `//small[@class="d-block mb-3 text-muted"]`;
//         const actual = $(selector).getText();
//         const curentYear = '2019';
//
//         assert.include(actual, curentYear);
//     });
//
//     it('should have right color title', () => {
//         const selector = '//span[@id="site-name"]';
//         const actual = $(selector).getCSSProperty('color').parsed.hex;
//         const expected = '#000000';
//         assert.equal(actual, expected);
//     });
// });
