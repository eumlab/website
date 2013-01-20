(function($) {

$(function() {
    setInstruPosition();
    $(window).on('resize', setInstruPosition);

    setTimeout(function() {
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
    }, 1000);

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

})(jQuery);
