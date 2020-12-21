/**
 * Custom Scripts.
 * Note: use this file to add or override any other scripts.
 * DON'T EDIT TEMPLATE JS FILES DIRECTLY, JUST USE THIS FILE.
 */

var transparent = true;

var scroll_up = true;

var core,
    $navbar,
    scroll_distance;


$(document).ready(function () {

    $navbar = $('header[color-on-scroll]');
    scroll_distance = $navbar.attr('color-on-scroll') || 500;


    if ($('header').length != 0) {
        core.checkScrollForTransparentNavbar();
        $(window).on('scroll', core.checkScrollForTransparentNavbar)
    }

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });
});

core = {
    misc: {
        navbar_menu_visible: 0
    },

    checkScrollForTransparentNavbar: debounce(function () {
        if ($(document).scrollTop() > scroll_distance) {
            if (transparent) {
                transparent = false;
                $('header').addClass('sticky');
                $('.navbar-sticky-logo img').attr('src', '/assets/images/logo/header-sticky-logo.svg');

            }
        } else {
            if (!transparent) {
                transparent = true;
                $('header').removeClass('sticky');
                $('.navbar-sticky-logo img').attr('src', '/assets/images/logo/header-logo.svg');
            }
        }
    }, 17),

}

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};


