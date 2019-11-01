import $ from "jquery";
import 'slick-carousel/slick/slick';


const Slider = () => {
    const $sliderStage = $('.slider--stage');
    const $sliderStageAuto = $('.slider--stage--auto');
    const $sliderThree = $('.slider--three');
    const $sliderFour = $('.slider--four');
    const $sliderFive = $('.slider--five');
    const $mediaSlider = $('.slider--media-slider');


    $sliderThree.slick({
        mobileFirst: true,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 480, /* [1] */
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768, /* [2] */
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 980, /* [2] */
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1330, /* [3] */
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }
        ]
    });
    $sliderFour.slick({
        mobileFirst: true,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 480, /* [1] */
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768, /* [2] */
                settings: {

                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 980, /* [2] */
                settings: {

                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1330, /* [3] */
                settings: {

                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    });

    $sliderFive.slick({
        mobileFirst: true,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 480, /* [1] */
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768, /* [2] */
                settings: {

                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 980, /* [2] */
                settings: {

                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1330, /* [3] */
                settings: {

                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }
        ]
    });

    const minWidth = 768,
        slickOptions = {
            mobileFirst: false,
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            responsive: [
                {
                    breakpoint: minWidth, /* [1] */
                    settings: 'slick',
                    arrows: false,

                }
            ]
        };


    const minWidthAuto = 768,
        slickOptionsAuto = {
            mobileFirst: false,
            dots: true,
            speed: 750,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            responsive: [
                {
                    breakpoint: minWidthAuto, /* [1] */
                    settings: 'slick',
                    arrows: false
                }
            ]
        };


    $sliderStage.slick(slickOptions);

    $sliderStageAuto.slick(slickOptionsAuto);

    $mediaSlider.slick(slickOptions);


   /* $(window).on('resize', () => {
        var width = $(window).width();

        if (width > minWidth) {
            if (this.$sliderStage[0] && this.$sliderStage[0].slick.unslicked) {
                this.$sliderStage.slick(slickOptions);
            } else if (this.$sliderStageAuto[0] && this.$sliderStageAuto[0].slick.unslicked) {
                this.$sliderStageAuto.slick(slickOptionsAuto);
            }
        }

    });*/
};

export default Slider;