$('document').ready(function() {

    $('.hasSubmenu').on('mouseenter', function (e) {
        e.stopPropagation();
        $(this).addClass('menuActive').find('ul').slideDown();
    }).on('mouseleave', function() {
        $(this).removeClass('menuActive').find('ul').slideUp();
    });
});