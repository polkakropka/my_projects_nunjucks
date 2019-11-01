import $ from "jquery";

const select = () => {
    $('select').each(function () {

        let $this = $(this),
            numberOfOptions = $(this).children('option').length;
        $this.addClass('s-hidden');
        $this.wrap('<div class="select-styled__container"></div>');

        $this.after('<div class="select-styled__dropdown"></div>');
        let $styledSelect = $this.next('div.select-styled__dropdown');

        $styledSelect.text($this.children('option').eq(0).text());

        let $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        for (let i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        let $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();

            let isActive = false;
            if($(this).hasClass('active')){
                isActive = true;
            }

            $('div.select-styled__dropdown.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });

            if( isActive === false){
                $(this).toggleClass('active').next('ul.options').show();
            }else{
                $(this).next('ul.options').hide();
            }
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    })
};
export default select;