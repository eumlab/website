(function($) {

$(function() {
    $('.play-item').click(function(e) {
        var target = $(e.currentTarget);

        target.siblings('.selected').removeClass('selected')
            .end().addClass("selected");

        var u = e.currentTarget.href;
        u = u.substring(u.indexOf("#")+1);

        $('#player').attr('src', 'http://www.youtube.com/embed/'+u+'?rel=0');
    });
});

})(jQuery);
