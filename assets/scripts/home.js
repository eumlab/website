(function($) {

$(function() {
    $(window).on('resize', setAppsPosition);

    setAppsPosition();
});

function setAppsPosition() {
    var win = $(window),
        winWidth = win.width(),
        winHeight = win.height();

    var scrollHeight = document.body.scrollHeight;

    var apps = $('#apps'),
        appsWidth = apps.width(),
        appsHeight = apps.height();

    var top, left;

    if ( winWidth < 1000 && winHeight < 615) {
        top = 140;
        left = 450;
    } else if (winWidth > 1000 && winHeight < 615) {
        top = (140 + appsHeight/2) * winWidth/1000 - appsHeight/2;
        left = (450 + appsWidth/2) * winWidth/1000 - appsWidth/2;
    } else if (winWidth < 1000 && winHeight > 615) {
        top = (140 + appsHeight/2) * winHeight/615 - appsHeight/2;
        left = 450;
    } else {
        if ((winHeight - 615)/615 > (winWidth - 1000)/1000) {
            ratio = winHeight/615;
        } else {
            ratio = winWidth/1000;
        }

        top = (140 + appsHeight/2) * ratio - appsHeight/2;
        left = (450 + appsWidth/2) * ratio - appsWidth/2;
    }

    apps.css({
        top: top,
        left: left
    });
}

})(jQuery);
