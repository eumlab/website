(function($) {

$(function() {
    var btn = $('.btn-apply, .link-jobs'),
        btnWrap = btn.parent();

    btn.hover(function() {
        btnWrap.addClass('hover');
    }, function() {
        btnWrap.removeClass('hover');
    }).on('mousedown', function() {
        btnWrap.addClass('active');
    });
    
    $('body').on('mouseup', function() {
        btnWrap.removeClass('active');
    });

    $('.link-jobs').click(function() {
        eum.scrollTo($('.section-5'));
    });
});

})(jQuery);
