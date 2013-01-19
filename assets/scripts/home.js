(function($) {

$(function() {
    $(window).on('resize', setAppsPosition);

    setAppsPosition();
});

function setAppsPosition() {
    var win = $(window),
        winWidth = win.width(),
        winHeight = win.height();

    var doc = $(document),
        scrollTop = $(document).scrollTop()
        scrollLeft = $(document).scrollLeft();

    var apps = $('#apps'),
        appsWidth = apps.width(),
        appsHeight = apps.height();

    var top, left;

    console.log('win hei' + winHeight);
    console.log('app hei' + appsHeight);

    if (winHeight <= 615 && winWidth <= 1000) {
        top = 140;
        left = 450;
    } else {
        if ((winHeight - 615)/615 > (winWidth - 1000)/1000) {
            console.log(1);
            ratio = winHeight/615;
        } else {
            console.log(2);
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
