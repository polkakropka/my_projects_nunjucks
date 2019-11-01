
const loginCookie = () => {

    const form = document.getElementById('loginForm');

    let cookieString = document.cookie;

    if (cookieString.indexOf('name=disclaimer')>=0 && form) {
        document.getElementById('disclaimer').setAttribute('checked', 'checked')
    }

    form && form.addEventListener('submit', () => {
        deleteCookie();
        createCookie();
    });

    let createCookie = () => {
        let expiration = new Date();
        expiration.setDate(expiration.getDate()+7);
        document.cookie = 'name=disclaimer;expires='+expiration.toUTCString()+';';
        console.log(document.cookie)
    };

    let deleteCookie = () => {
        document.cookie = 'name=disclaimer;expires=-1;'
    }
};

export default loginCookie;
