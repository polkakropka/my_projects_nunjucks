import $ from "jquery";

const video = () => {
    const vid = $('video');
    const video = vid.get(0);

    let msie = window.navigator.userAgent.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        videoPlay();
    } else {
        videoSlider();
        videoPlay();
    }

    function videoSlider() {
        $('.slider--stage').on('afterChange', function(event, slick, currentSlide){
            let videoSlickIndex = $('.slick-slide').has('video').data('slickIndex');
            if (currentSlide === videoSlickIndex ) {
                video.play();
            } else {
                video.pause();
            }
        });
    }

    function videoPlay() {
        vid.click(function(){
            if(this.paused) {
                this.play();
            } else {
                this.pause();
            }
          //  this[this.paused ? 'play' : 'pause']();
        });
    }

};
export default video;
