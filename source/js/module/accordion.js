import $ from "jquery";
const Accordion =() => {

    let accordion = $('.accordion');
    accordion.addClass('is-initialized').on('click', 'dt', function () {
        let dt = $(this);
        // check if the current item is already visible
        let currentItemIsActive = dt.hasClass('is-active');
        // hide all items
        dt.closest('.accordion').find('dt').removeClass('is-active');
        if (!currentItemIsActive) {
            // hide current item if it was visible before
            dt.addClass('is-active');
        }
        $('html, body').animate({scrollTop: ($($dt).offset().top - 50)}, 'slow');
    });

    return this;
};

export default Accordion;