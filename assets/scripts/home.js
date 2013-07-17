(function($) {

    /*
$(function() {
    $(window).on('resize', setAppsPosition);

    setAppsPosition();
});

function setAppsPosition() {
    var win = $('.container'),
        winWidth = win.width(),
        winHeight = win.height();

    var scrollHeight = document.body.scrollHeight;

    var apps = $('#apps'),
        appsWidth = apps.width(),
        appsHeight = apps.height();

    var top, right;

    if ( winWidth <= 1000 &&  winHeight <= 615 ) {
        top = 140;
        right = 260;
    } else if ( winWidth >= 1000 && winHeight <= 615 ) {
        top = (140 + appsHeight/2) * winWidth/1000 - appsHeight/2;
        right = (260 + appsWidth/2) * winWidth/1000 - appsWidth/2;
    } else if ( winWidth <= 1000 && winHeight >= 615 ) {
        top = (140 + appsHeight/2) * winHeight/615 - appsHeight/2;
        right = 220;
    } else {
        top = (140 + appsHeight/2) * winHeight/615 - appsHeight/2;
        right = (260 + appsWidth/2) * winWidth/1000 - appsWidth/2;
    }

    apps.css({
        top: top,
        right: right
    });
}
*/

})(jQuery);
