import $ from "jquery";

const toggleButton = () => {
    $('.toggle-btn--checkbox').click(function() {
        let mainParent = $(this).parent('.toggle-btn');
        if($(mainParent).find('input.toggle-btn--checkbox').is(':checked')) {
            $(mainParent).addClass('active');
        } else {
            $(mainParent).removeClass('active');
        }

    })
};
export default toggleButton;