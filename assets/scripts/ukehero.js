$(function() {
    $(window).on('resize', resize).resize();
});

function resize(e) {
    var win = $(window);
    var winH = win.height();

    $(".firstpage-container").css("height", winH);
}
