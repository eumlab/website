(function($) {

$(function() {
    eum.loadImage('/assets/images/dr-header.jpg', $.proxy(function( img ) {
        var bg = $('.header .bg').css({
            'background-image': 'url(' + img.src + ')'
        });

        setTimeout(function() {
            bg.css('opacity', 1);
        }, 1000);
    }, this));

    $('.videos').on('click', '.video-mask', function(e) {
        var mask = $(e.currentTarget),
            iframe = mask.prev();

        var scrollTop = $(document).scrollTop(),
            scrollLeft = $(document).scrollLeft(),
            maskSize = {
                width: mask.width(),
                height: mask.height(),
                top: mask.offset().top - scrollTop,
                left: mask.offset().left - scrollLeft
            };


        var playWrap = $('<div />', {
                'class': 'play-wrap loading'
            }).click($.proxy(hidePlay, this)).appendTo( "body" );

        var modal = $('<div class="modal"></div>').appendTo(playWrap);

        var playElem = $('<div />', {
                id: 'play-elem'
            }).css(maskSize).appendTo(playWrap);

        var player = iframe.clone().attr('src', iframe.attr('src') + '&autoplay=1').appendTo(playElem),
            close = $('<div />', {
                'class': 'btn-close',
                'html': '&times;'
            }).appendTo(playElem);

        $(document).on( "keydown.video", $.proxy(function(e) {
            if (e.which === 27) {
                hideOrigin.call(this);
            }
        }, this));


        setTimeout( function() {
            eum.transitionEnd(playElem, function( e ) {
                playWrap.removeClass('loading');
            });

            var win = $(window),
                scrollTop = $(document).scrollTop(),
                scrollLeft = $(document).scrollLeft(),
                playSize = {
                    width: 800,
                    height: 453,
                    top: (win.height() - 453)/2,
                    left: (win.width() - 800)/2
                };

            playElem.css(playSize);
        }, 20 );

        function hidePlay() {
            close.remove();

            var scrollTop = $( document ).scrollTop(),
                scrollLeft = $( document ).scrollLeft(),
                maskSize = {
                    width: mask.width(),
                    height: mask.height(),
                    top: mask.offset().top - scrollTop,
                    left: mask.offset().left - scrollLeft
                };

            playElem.css(maskSize);

            eum.transitionEnd(playElem, function(e) {
                playWrap.remove();
                playElem = null;
            });

            $(document).unbind( ".video" );
        }

        return playWrap;
    });
});

})(jQuery);
