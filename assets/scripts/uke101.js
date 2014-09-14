$(function() {
    // $(".firstpage-container").css({"height": $(window).height()});

    eum.loadImage('/assets/images/uke101/part3-l.png');
    eum.loadImage('/assets/images/uke101/part3-r.png');

    // if refresh page, and the position is two perspective section
    twoPerspectiveAnim();
    lessonAnim();

    $(window).scroll(function() {
        twoPerspectiveAnim();
        lessonAnim();
    });
});

function twoPerspectiveAnim() {
    var animEls = $('.two-perspective-ani');

    if (animEls.is('.show')) return

    var win = $(window),
        section = $('.two-perspective.section');

    if (win.scrollTop() + win.height() < section.offset().top + section.height() * 4 / 5) return

    animEls.addClass('show');

    adjustTwoPerspectivePos();
    win.resize(adjustTwoPerspectivePos);
}

function adjustTwoPerspectivePos() {
    var min = 1200;
    var win = $(window);
    var leftEl = $('#two-perspective-left');
    var rightEl = $('#two-perspective-right');
    var delta = Math.max((min - win.width()) / 2, 0);

    leftEl.css('left', 0 - delta);
    rightEl.css('right', 0 - delta);
}

function lessonAnim() {
    var treeEl = $('.tree');
    var lessonEls = $('.lesson.scale');

    if (treeEl.is('.animated')) return

    var win = $(window);

    if (win.scrollTop() + win.height() < treeEl.offset().top + treeEl.height() * 3 / 5) return

    treeEl.addClass('animated');
    lessonEls.removeClass('scale');
}
