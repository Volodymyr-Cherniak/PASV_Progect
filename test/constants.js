
const url =  {
    baseUrl: 'https://stage.pasv.us',
    loginUrl: 'https://stage.pasv.us/user/login',
    registerUrl: 'https://stage.pasv.us/user/register',
    serverUrl: 'https://server-stage,pasv.us'
};

const user = {
    admin: {
        login: 'admin@test.com',
        password: '11111',
        name: 'Ruslan Admin',
        phone: '+12312312334'
    },
    student:{
        login: 'student_vova@test.com',
        password: '11111',
        name: {
            firstName: 'TestVova',
            lastName: 'StudentVova'
        },
        phone: '12312312334',
        about: 'TestVova TestVova TestVova TestVova TestVova TestVova ',
        goals: 'TestVova TestVova TestVova TestVova TestVova TestVova '
    }
};

module.exports = {
    url,
    user
};
