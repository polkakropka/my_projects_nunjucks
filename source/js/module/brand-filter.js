import $ from "jquery";

const brandFilter = () => {
    let filterItem =$('.brand__filer--item');
    let brandGrid = $('.brand__grid');
    let brandItem = $('.brand__item', brandGrid);


    filterItem.on('click', function () {
        let filter = $(this).data('filter');

        brandItem.each(function(i) {
            if( brandItem.eq(i).data('filter').slice(0, 1).toLowerCase() != filter) {
                brandItem.eq(i).addClass('hidden');
            } else {
                brandItem.eq(i).removeClass('hidden');
            }
            if(filter == 'all') {
                brandItem.removeClass('hidden');
            }
        })
    });


    $('.brand__filter-list--label').on('click', function () {
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
        $(this).siblings().toggleClass('active');
    });
    filterItem.on('click', function () {
        $('.brand__filter-list').removeClass('active')
    })
};
export default brandFilter;