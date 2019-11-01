import $ from "jquery";
//_polyfills
import './base/dropzone';

import './polyfills/_polyfills';


import Dropdown from './base/dropdown';
import toggleButton from './base/toggle-btn';
import printContent from './base/print-content';
import Accordion  from './module/accordion';
import brandFilter  from './module/brand-filter';
import coockie from './module/cookie-consent';
import flyout from './module/flyout';
import Header from './module/header';
import loginCookie from './module/login-cookie';
//import Micromodal from './module/micromodal';
import productDetail from './module/product-detail';
import formValidator from './module/product-form-validator';
import select from './module/select';
import Slider from './module/slider';
import Timeline from './module/timeline';
import upload from './module/upload';
import video from './module/video';
import Datepicker from './base/datepicker';
//import uploadInput from "./module/upload-input";
//import uploadThumbnail from "./module/upload-thumbnail";






document.addEventListener('DOMContentLoaded', function () {
    Dropdown();
    toggleButton();
    printContent();
    Accordion();
    brandFilter();
    coockie();
    flyout();
    Header();
    loginCookie();
    //Micromodal();
    productDetail();
    formValidator.init();
    select();
    Slider();
    Timeline();
    upload();
    video();
    Datepicker.init();
   // uploadInput();
   // uploadThumbnail();

    let vid = $('video', '.stage');

    //vid.removeAttr('controls');
    //vid.removeAttr('autoplay');


    //prevents default behaviors for default anchor tags
    $( 'a[href="#"]' ).click( function(e) {
        e.preventDefault();
    });
    $( 'a[href="/#"]' ).click( function(e) {
        e.preventDefault();
    });
});
