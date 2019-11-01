import $ from "jquery";

const productDetail = () => {
    let productDetail = $('.product-detail');
    let iconDelete = $('.icon-delete', productDetail);
    let dialogWindow = $('.product-detail__dialog');
    let answerNo = $('.product-detail__dialog--link-no');

    productDetail.each(function (i) {
        iconDelete.eq(i).on('click', function () {
            dialogWindow.eq(i).removeClass('hidden');
            $('.product-detail__container').eq(i).addClass('covered');
        });

        answerNo.eq(i).on('click', function () {
            dialogWindow.eq(i).addClass('hidden');
            $('.product-detail__container').eq(i).removeClass('covered');
        })
    })
};
export default productDetail;
