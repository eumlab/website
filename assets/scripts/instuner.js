(function($) {



$(function() {
    setInstruPosition();
    $(window).on('resize', setInstruPosition);

    eum.loadImage('/assets/images/it-header-guitar.png', function(img) {
        $('.header .guitar').css({
            'background-image': 'url(' + img.src + ')'
        });

        eum.loadImage('/assets/images/it-header-violin.png', function(img) {
            $('.header .violin').css({
                'background-image': 'url(' + img.src + ')'
            });

            setTimeout(function() {
                instruAnimation();
            }, 1000);
        });
    });
});

function setInstruPosition() {
    var mainWidth = 980,
        screen = $(window).width(),
        instruWidth = 414,
        instruAvaliable = (screen - 980) / 2,
        offset = instruAvaliable - instruWidth;

    $('#guitar').css('left', offset);
    $('#violin').css('right', offset);
}

function instruAnimation() {
    var offset = parseInt($('#guitar').css('left')),
        move = 100;

    $('#guitar').css('left', offset - move).animate({
        left: offset,
        opacity: "show"
    }, 600);
    
    $('#violin').css('right', offset - move).animate({
        right: offset,
        opacity: "show"
    }, 600);
}

})(jQuery);
