import $ from "jquery";

const printContent = () => {
    let dropdownId = '#' + $('.dropdown').attr('id');

    print($('.dropdown__label', dropdownId), $('.dropdown__list__element'));
    print($('.brand__filter-list--label'), $('.brand__filer--item'))


//print content of the link after click
    function print(where, event) {
        event.on('click', function() {
            let content = $('a', this).html();
            where.html(content);
        })
    }
};
export default printContent;

