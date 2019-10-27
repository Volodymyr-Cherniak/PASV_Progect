assert = require('chai').assert;

describe('TED', () => {

    it('link TED is fined', () =>{
        browser.url('http://google.com/');

        const selector = '//input[@name=\'q\']';
        $(selector).setValue('TED');
        browser.keys('Enter');
    });

    it('should fined first result', function () {
        const sel = '//div[@id= \'res\']//h3';
        const actual = $(sel).isDisplayed();
        assert.equal(actual, true);
    });
});
