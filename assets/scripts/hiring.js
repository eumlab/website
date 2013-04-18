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

    $('div.staff').click(function(e) {
        var staff = $(this),
            keyMap = staff.data('key-map').split(','),
            introOrder = staff.data('intro');
            selector = [];

        $.each(keyMap, function(idx, key) {
            selector.push('[data-key=' + key + ']');
        });
        
        $('.skills').find('.active').removeClass('active')
            .end().find(selector.join(',')).addClass('active');

        staff.siblings('.selected').removeClass('selected')
            .end().addClass('selected');

        var oldIntro = $('.intro-inner.selected'),
            newIntro = $('.intro-inner').eq(introOrder);
        
        oldIntro.fadeOut(200, function() {
            $(this).removeClass('selected')

            newIntro.fadeIn(200, function() {
                newIntro.addClass('selected');
            });
        });
    });
});

})(jQuery);
