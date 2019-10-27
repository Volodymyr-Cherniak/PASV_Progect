const { assert } = require('chai');
const Register = require('./../../../helpers/register.js');
const { url, user } = require('./../../../constants.js');
const { axios } = require('axios');

describe('User--Register--Login--integration', () => {
    before(() => {
        console.log('-----------------');
        axios.post(`${url.serverUrl}/user/login`, {
            email: user.admin.login,
            password: user.admin.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log('-----------------');

    });

    // it('should register new user', function () {
    //     Register(browser);
    //     browser.pause(20000);
    // });
    it('should pass', function () {
        assert.equal(2, 2);
    });

});
