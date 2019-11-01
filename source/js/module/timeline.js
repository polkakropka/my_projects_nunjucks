import $ from "jquery";

const Timeline = () => {

    let hook = document.querySelector('.timeline');

    if (hook) {

        const months = []
        const headline = document.querySelector('.timeline__headline');
        const itemList = document.querySelectorAll('.timeline__item');
        const firstYear = itemList[0].querySelector('.timeline__year').innerHTML;
        const lastYear = itemList[itemList.length - 1].querySelector('.timeline__year').innerHTML;
        // const filter:any = document.querySelector('.timeline__category').querySelector('select')

        // creating array containing month names
        for (let i = 0; i < 12; i++) {
            let searchTerm = '.timeline__month[data-month="' + (i + 1) + '"]';
            let element = document.querySelector(searchTerm);
            months[i] = element.dataset.monthName
        }

        let insertMonth = (element, i) => {
            element.innerHTML = months[i]
        };

        const urlParamString = document.location.search.substring(1);
        let urlParams = {};

        // url parameter parsing
        if (urlParamString.indexOf('month=') !== -1) {
            const paramPairs = urlParamString.split('&');

            for (let i = 0; i < paramPairs.length; i++) {
                const tempPair = paramPairs[i].split('=');
                urlParams[tempPair[0]] = tempPair[1]
            }

            // checks if url parameters contain valid month values
            if (!(parseInt(urlParams['month']) > 0) ||
                !(parseInt(urlParams['month']) < 13))
            {
                urlParams['month'] = (new Date().getMonth() + 1).toString()

            }

            // checks if url parameters contain valid year values
            if ((!(parseInt(urlParams['year'])  >= parseInt(firstYear)) || !(parseInt(urlParams["year"])  <= parseInt(lastYear))) ||
                urlParamString.indexOf('year=') === -1)
            {
                urlParams['year'] = new Date().getFullYear().toString()
            }
        } else {
            urlParams['month'] = (new Date().getMonth() + 1).toString();
            urlParams['year'] = new Date().getFullYear().toString();
        }

        // injecting currently selected month/year into headline
        if (headline) {
            headline.innerHTML = (months[parseInt(urlParams['month']) - 1] + ' ' + urlParams['year'])
        }

        // searching for items which contain the first instance of a year number
        for (let i = parseInt(firstYear); i <= parseInt(lastYear); i++) {

            for (let j = 0; j < itemList.length; j++) {
                if (i === parseInt(itemList[j].querySelector('.timeline__year').innerHTML)) {
                    itemList[j].classList.add('timeline__show-year');
                    itemList[j].classList.add('timeline__new-year');
                    itemList[j - 1] ? itemList[j - 1].classList.add('timeline__show-year') : null;
                    break
                }

                if (j === itemList.length - 1) {
                    itemList[j].classList.add('timeline__show-year')
                }
            }
        }

        let sliderIndex = 0;

        // search query for currently filtered year and month
        // injecting month names into elements
        for (let i = 0; i < itemList.length; i++) {
            const monthHook = itemList[i].querySelector('.timeline__month');

            // not necessary, since months are currently written server-side
            // insertMonth(monthHook, (monthHook.dataset.month - 1))

            if (parseInt(monthHook.dataset.month) === parseInt(urlParams['month']) &&
                parseInt(itemList[i].querySelector('.timeline__year').innerHTML) === parseInt(urlParams['year']))
            {
                itemList[i].classList.add('timeline__selected');
                sliderIndex = i
            }
        }

        // // sets selected index to url parameter category, if available
        // if(urlParams['category']) {
        //     for (let i = 0; i < filter.options.length; i++) {
        //         if(filter.options[i].value === urlParams['category']) {
        //             filter.selectedIndex = i
        //         }
        //     }
        // }

        // // category selectbox handling
        // filter.addEventListener('change', (e) => {
        //     // onChange: reload page with new parameters
        //     window.open(
        //         document.location.origin +
        //         document.location.pathname +
        //         '?month=' +
        //         urlParams['month'] +
        //         '&year=' +
        //         urlParams['year'] +
        //         '&category=' +
        //         filter.options[filter.selectedIndex].value,
        //         "_self"
        //     )
        // })

        // creating slider
        let timelineSlider  = $('.slider--timeline');

        // causes jump to currently selected month/year filtered
        timelineSlider.on('init', function (e, slick) {
            slick.slickGoTo(sliderIndex)
        });

        timelineSlider.on('afterChange', function (e, slick) {
            hook.classList.contains('timeline--visible') ? null : hook.classList.add('timeline--visible')
        });

        // inittialising slick slider
        timelineSlider.slick({
            mobileFirst: true,
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            initialSlide: sliderIndex - (sliderIndex % 2),
            responsive: [
                {
                    breakpoint: 400, /* [1] */
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        initialSlide:  sliderIndex - (sliderIndex % 3)
                    }
                },
                {
                    breakpoint: 480, /* [1] */
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        initialSlide:  sliderIndex - (sliderIndex % 4)
                    }
                },
                {
                    breakpoint: 768, /* [2] */
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        initialSlide: sliderIndex - (sliderIndex % 5)
                    }
                },
                {
                    breakpoint: 980, /* [2] */
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6,
                        initialSlide: sliderIndex - (sliderIndex % 6)
                    }
                }
            ]
        })
    }
};
export default Timeline;
