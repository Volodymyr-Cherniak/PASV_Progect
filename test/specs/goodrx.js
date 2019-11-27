const { assert } = require('chai');

const URL = 'https://www.goodrx.com/';
const drugName = 'Amoxicillin';
const searchInputSelector = '//div[@class="search-wrap"]//input[@name="drug-name"]';
let searchDropDownFirstResult = '//div[@class="search-wrap"]//ul[@class="typeahead dropdown-menu"]/li[1]';

let drugPagePrescriptionSettingsSelector = '//div[@aria-label="Prescription Settings"]';
const drugPageRows = '//div[@id="a11y-prices-start"]//button[contains(text(), "Get free")]/../..';

describe('Amoxicilin', () => {
    before(()=>{
        browser.url(URL);


        browser.setCookies([
            {name: 'grx_internal_user', value: 'true'}
        ]);

        browser.refresh();
    });

    it('should open the main page with correct h1', function () {
        const h1Text = $('//h1').getText();
        const h1TextExpected = 'Stop paying too much for your prescriptions';
        assert.equal(h1Text, h1TextExpected);
    });

    it('should open the main page with the search input ', function () {
        const searcInputIsDisplayed = $(searchInputSelector).isDisplayed();
        assert(searcInputIsDisplayed, true)
    });

    it('should type drug name into search input', function () {
        const searchInput = $(searchInputSelector);
        searchInput.setValue(drugName);

        $(searchDropDownFirstResult).click();

    });

    it('should check price page for corect drug name', function () {
        const h1Text = $('//h1/a').getText();
        assert.equal(h1Text, drugName);
    });

    it('should check price for Prescription Settings is displayed', function () {
        const prescriptionSettingsIsDisplayed = $(drugPagePrescriptionSettingsSelector).isDisplayed();
        assert.equal(prescriptionSettingsIsDisplayed, true);
    });


    it('should check every price row', function () {
        let allRows = $$(drugPageRows);

        const currentWindowId = browser.getWindowHandles()[0];

        let rowPrice, buttonCoupon;

        allRows.forEach(row => {
            rowPrice = row.$('.//div[@data-qa="drug_price"]').getText().split('\n')[1].substring(1);
            buttonCoupon = row.$('.//button[@data-qa="coupon_button"]');
            buttonCoupon.click();

            const modalHeyDoctor = $('//div[@id="modal-heyDoctorModal"]//button[@aria-label="click to close modal"]');
            if (!modalHeyDoctor.error && modalHeyDoctor.isDisplayed()){
                modalHeyDoctor.click();
            }


            const handles = browser.getWindowHandles();
            const newTabId = handles.filter(el => el !== currentWindowId)[0];

            console.log('HANDLES', handles);

            if (newTabId) {
                browser.switchToWindow(newTabId);
                const price = $('//div[@class="price-info"]//span').getText();
                console.log('PRICE', price);
                assert.equal(price, rowPrice);

                browser.closeWindow();
                browser.switchToWindow(currentWindowId);

                const modalPostCoupon = $('//div[@id="modal-PostCoupon"]//span[@role="button"]');
                if (!modalPostCoupon.error && modalPostCoupon.isDisplayed()){
                    modalPostCoupon.click();
                }

            }
        })
        //browser.debug();
    });
});
