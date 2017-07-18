'use strict';

$(document).ready(function () {
    $('.slideshow').slick({
        dots: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        infinite: true
    });
});