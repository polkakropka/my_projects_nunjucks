import $ from "jquery";

const Header = () => {
    let header = $(".header");
    let headerContainer =$('.header__main-container')
    let headerLogin = $('.header__login');
    let $subNavItem = $('.header__sub-nav');


    let navigation = $('.header__main-nav');
    let headerMenu = $('.header__menu');
    let manNavItem = $('.header__main-nav--item');

    let searchBtn = $('#search_submit');
    let searchInput = $('#search');
    let searchbar = $('.searchbar-small');


    let selectOfficeLink = $('.header__select--link');
    let selectOfficeContainer = $('.header__select__container');
    let submitLink = $('.link-submit', selectOfficeContainer);
    let selectLinkContent = $('.office');
    let selectLinkText = selectLinkContent.html();

    let headerBtn = $('.header__btn-menu');
    let iconMenu = $('.icon-menu', headerBtn);

    let closeSelectOfficeContainer = $('.icon-close', header);

    let desktopOfficeText = "Filiale auswählen: ";

    $(window).resize(function() {
        /*If browser resized, check width again */
        if (window.innerWidth >= 1200) {
            changeOfficeText(desktopOfficeText);
        }
        else {
            changeOfficeText(selectLinkText);

        }
    });
    if ($(window).width() >= 1200 ) {
        changeOfficeText(desktopOfficeText);
    } else {
        changeOfficeText(selectLinkText);

    }


//close a burger menu, when user clicked outside of the navigation
    $(document).mouseup(function(e)
    {
        var container = $('.header');

        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            headerMenu.removeClass('active');
            iconMenu.removeClass('icon-close');
            searchInput.removeClass('active')
        }
    });


    headerBtn.on('click', function () {
        iconMenu.toggleClass('icon-close');
        headerMenu.toggleClass('active');
    });

    manNavItem.on('click', function () {
        $(this).toggleClass('open-subnav').siblings().removeClass('open-subnav');
    });

    $subNavItem.click(function() {
        //$('.nav-main--item .nav-sub--item').removeClass('active');
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    searchBtn.on('click', function () {
        navigation.toggleClass('hidden-on-desktop');
        $('.header__logo-container').toggleClass('hidden-on-mobile');
        searchInput.toggleClass('active');
    });

    //close header-select
    closeSelectOfficeContainer.on('click', function () {
        selectOfficeContainer.removeClass('visible');
        navigation.removeClass('hidden-on-desktop');
        headerLogin.removeClass('hidden-on-desktop');
        searchbar.removeClass('hidden-on-desktop');
        headerContainer.removeClass('more-height');

        //changeOfficeText(selectLinkText);
    });
    //open header-select dropdown in Desktop
    selectOfficeLink.on('click', function () {
        navigation.toggleClass('hidden-on-desktop');
        selectOfficeContainer.toggleClass('visible');
        headerLogin.toggleClass('hidden-on-desktop');
        searchbar.toggleClass('hidden-on-desktop');
        headerContainer.toggleClass('more-height');

    });

    submitLink.on('click', function () {
        printValue();
        selectOfficeContainer.removeClass('visible');
        navigation.removeClass('hidden-on-desktop');
        headerLogin.removeClass('hidden-on-desktop');
        searchbar.removeClass('hidden-on-desktop');
        headerContainer.removeClass('more-height');
    });

    function printValue() {
        let selectVal = $('select', selectOfficeContainer).val();
        $('.office-content').html(selectVal)
        changeOfficeText(selectLinkText);
    }
    function changeOfficeText(text) {
        selectLinkContent.html(text)
    }

//header on scroll
    $(function(){
        let shrinkHeader = 300;
        $(window).scroll(function() {
            let scroll = getCurrentScroll();
            if ( scroll >= shrinkHeader ) {
                $('.header').addClass('header-on-scroll');
            }
            else {
                $('.header').removeClass('header-on-scroll');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
};

export default Header;