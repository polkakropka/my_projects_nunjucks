import  cookieconsent  from 'cookieconsent';

const coockie = () => {
window.addEventListener("load", function() {


        const cookie = document.querySelector('.cookie-consent');

        if (cookie) {

            const text = cookie.querySelector('.cookie-consent__text').innerHTML;
            const button = cookie.querySelector('.cookie-consent__button').innerHTML;

            window.cookieconsent.initialise({
                "palette": {
                    "popup": {
                        "background": "#C41230"
                    },
                    "button": {
                        "background": "#C41230"
                    }
                },
                "theme": "classic",
                "position": "bottom",
                "content": {
                    "message": text,
                    "dismiss": button
                },
                "showLink": false
            });

            let disclaimer = document.querySelector('.cc-window');

            if (disclaimer) {
                disclaimer.classList.remove('cc-floating');
                disclaimer.classList.add('cc-banner')
            }
        }
    });
};
export default coockie;