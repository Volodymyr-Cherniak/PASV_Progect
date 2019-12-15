assert = require('chai').assert;
const Login = require('../../helpers/login.js');

const btnDiary = '//a[contains(text(),\'Diary\')]';

describe('Login', () => {

    it('should email', () =>{
        Login(browser);
    });
});

describe('Shoud confirm Dairy List ', () => {

    it('Dairy btn is appears', () => {
        const actual = $(btnDiary).isEnabled();
        const expected = true;
        assert.equal(actual, expected);
    });


    it('btn Dairy shoud redirect to diary lis page', () => {
        $(btnDiary).click();
        const selectorH1 = '//h1[contains(text(),"Day reports")]';
        const actual = $(selectorH1).getText();
        const expectedText = 'Day reports';
        assert.equal(actual, expectedText);
    });

    it('Dairy report list is apears', () => {
        const selector = '//body/div[@id=\'root\']/div/div/div/div[@class=\'container\']/div[@class=\'row\']/div[@class=\'col\']/div/div[@class=\'row\']/div[2]';
        const actual = $(selector).isDisplayed();
        console.log(actual);
        const expectedText = true;
        assert.equal(actual, expectedText);
    });

});
