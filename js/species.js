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

    textBoxResize();

});

let textBoxResize = function (event) {
    if ($(window).width() > 750) {
        let textbox1 = $('#knotweed').height();
        $('#hogweed').height(textbox1);
    } else {
        $('#hogweed').css('height', 'initial');
    }

    $(window).resize(function () {
        if ($(window).width() > 750) {
            let textbox1 = $('#knotweed').height();
            $('#hogweed').height(textbox1);
        } else {
            $('#hogweed').css('height', 'initial');
        }
    });
};