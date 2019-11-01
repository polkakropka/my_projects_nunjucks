import $ from "jquery";
import MicroModal from 'micromodal';

const Micromodal = () => {

    let contentSliderModalItem = $('.content-slider-modal__item').attr('id');

    if ($(contentSliderModalItem) !== null) {
        MicroModal.init({
            onShow: (modal) => {
            },
            onClose: (modal) => {
            },
            disableScroll: true,
            disableFocus: false,
            awaitCloseAnimation: false,
            debugMode: false
        });
    }
};
export default Micromodal;