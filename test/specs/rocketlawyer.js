const { assert } = require('chai');

const URL = 'https://www.rocketlawyer.com/es/es';
let arrLinks = "//div[@class='col-xs-12 col-lg-12 centered what-you-need-panel']//a[contains(text(),'')]";
const arr2 = [];

describe('Crea documentos',()=>{
    it('should click array of links', function () {
        browser.url(URL);
        let arr = $$(arrLinks);
        for(let i in arr){
            arr2.push(arr[i].getText());
            arr[i].click();
            browser.pause(1000);
            browser.back();
            browser.pause(1000);
        }
        browser.pause(5000);
        console.log('*************');
        console.log(arr2);
        //browser.debug();
    });
});
//div[@class='col-xs-12 col-lg-12 centered what-you-need-panel']
//div[@class='col-xs-12 col-sm-4 col-lg-4 generic-wyn-panel make-doc']//a[@class='btn btn-primary'][contains(text(),'Crea documentos')]
//div[@class='has-edit-button']//div[@class='submenu-list']//div[@class='col col-6']//a[@class='text-link'][contains(text(),'')]
