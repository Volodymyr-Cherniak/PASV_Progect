//const assert = require('chai').assert;

const str = '0123456789qwertyuiopasdfghjklzxcvbnm';
const arr = str.split('');
let one, two;


describe('Browsing screen', () => {

    it('should look all scren', function () {

        for(let i in arr){
            one = arr[i];
            for(let j in arr) {
                two = arr[j];
                browser.url(`https://prnt.sc/npar${one}${two}`);
                browser.pause(1000);
            }

        }

    });
});
