/*JQuery */
$(function () {

    $(".bienvenue").slideDown(1500);
    $('.btn-dark').click(function () {
        $(this).toggleClass('bg-black');
    });
    /* COULEUR ICON MENU */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 650) {
            $('.btn-dark').addClass('btn-scroll');
        } else {
            $('.btn-dark').removeClass('btn-scroll');
        }

    });
    /* COULEUR ICON MENU */

});

/*AOS */

AOS.init({
    duration: 8200,
});

// external js: masonry.pkgd.js

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 160,
    gutter: 20
});
