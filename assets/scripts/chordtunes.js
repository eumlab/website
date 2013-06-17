(function($) {

$(function() {
    eum.loadImage('/assets/images/ct-wood-table.png', $.proxy(function( img ) {
        var bg = $('.header .bg').css({
            'background-image': 'url(' + img.src + ')'
        });

        setTimeout(function() {
            bg.css('opacity', 1);
        }, 1000);
    }, this));
});

})(jQuery);
