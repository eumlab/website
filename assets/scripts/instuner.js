(function($) {

$(function() {
    initModesTop();
    initModes();

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

    $('.show-lite').on('click', function(e) {
        e.preventDefault();

        var btn = $(this),
            sec = $('.section-5');

        sec.slideDown();
        eum.scrollTo(sec);
        btn.remove();
    });
});

function initModesTop() {
    var modes = {
        fft: eum.genAnimationArray({
            prefix: "/assets/images/it/modes_top/fft/PM_",
            count: 58,
            fixed: 2
        }),
        fine: eum.genAnimationArray({
            prefix: "/assets/images/it/modes_top/fine/PM_",
            count: 59,
            fixed: 2
        }),
        instant: eum.genAnimationArray({
            prefix: "/assets/images/it/modes_top/instant/PM_",
            count: 58,
            fixed: 2
        }),
        spectrograms: eum.genAnimationArray({
            prefix: "/assets/images/it/modes_top/spectrograms/PM_",
            count: 58,
            fixed: 2
        }),
        strobe: eum.genAnimationArray({
            prefix: "/assets/images/it/modes_top/strobe/PM_",
            count: 58,
            fixed: 2
        })
    }

    var firstImages = [];

    for (type in modes) {
        firstImages.push(modes[type][0]);
    }

    eum.preloadImages(firstImages);

    $('.it-nav').on('click', 'a', function(e) {
        e.preventDefault();

        var nextMode = $(e.target),
            currentMode = $('.it-nav a.selected');

        var type = nextMode.data('type'),
            wrap = $("#app-animation").parent(),
            animation = wrap.parent(),
            firstImg = modes[type][0],
            img = $('<img id="app-animation" src="' + firstImg + '" width="500" height="500" />');

        animation.css('backgroundImage', 'url(' + firstImg + ')');
        wrap.remove();
        img.appendTo(animation);

        currentMode.removeClass('selected');
        nextMode.addClass('selected');

        img.threesixty({
            images: modes[type],
            method:'auto',
            direction:'forward',
            sensibility: 1,
            autoscrollspeed:80
        });
    }).find('a:first').click();
}

function initModes() {
    var modes = {
        fft: eum.genAnimationArray({
            prefix: "/assets/images/it/modes/fft/ReflectorRecording_",
            count: 59,
            fixed: 5
        }),
        fine: eum.genAnimationArray({
            prefix: "/assets/images/it/modes/fine/ReflectorRecording_",
            count: 59,
            fixed: 5
        }),
        instant: eum.genAnimationArray({
            prefix: "/assets/images/it/modes/instant/ReflectorRecording_",
            count: 59,
            fixed: 5
        }),
        spectrograms: eum.genAnimationArray({
            prefix: "/assets/images/it/modes/spectrograms/ReflectorRecording_",
            count: 59,
            fixed: 5
        }),
        strobe: eum.genAnimationArray({
            prefix: "/assets/images/it/modes/strobe/ReflectorRecording_",
            count: 59,
            fixed: 5
        })
    }

    var firstImages = [];

    for (type in modes) {
        firstImages.push(modes[type][0]);
    }

    eum.preloadImages(firstImages);

    var firstMode = $('.modes li:first'),
        type = firstMode.data('type'),
        prevBtn = $('.section-3 .prev'),
        nextBtn = $('.section-3 .next'),
        rotate = 360 / firstImages.length;

    firstMode.addClass('selected');

    $("#mode-animation").threesixty({
        images: modes[type],
        method:'auto',
        direction:'forward',
        sensibility: 1,
        autoscrollspeed:80
    });

    prevBtn.add(nextBtn).on('click', function(e) {
        e.preventDefault();

        var btn = $(e.target),
            currentMode = $('.modes li.selected'),
            gear = $('.gear-img'),
            degree = gear.data('degree') || 0;

        if (btn.is(nextBtn)) {
            degree += rotate;
            nextMode = currentMode.next();

            if (!nextMode.length) {
                nextMode = $('.modes li:first');
            }
        } else {
            degree -= rotate;
            nextMode = currentMode.prev();

            if (!nextMode.length) {
                nextMode = $('.modes li:last');
            }
        }

        var type = nextMode.data('type'),
            wrap = $("#mode-animation").parent(),
            animation = wrap.parent(),
            firstImg = modes[type][0],
            img = $('<img id="mode-animation" src="' + firstImg + '" width="445" height="251" />');

        animation.css('backgroundImage', 'url(' + firstImg + ')');
        wrap.remove();
        img.appendTo(animation);

        gear.css({
            'transform': 'rotate(' + degree + 'deg)'
        }).data('degree', degree);

        currentMode.fadeOut(function() {
            currentMode.removeClass('selected');
            nextMode.fadeIn().addClass('selected');
        });

        img.threesixty({
            images: modes[type],
            method:'auto',
            direction:'forward',
            sensibility: 1,
            autoscrollspeed:80
        });
    });
}

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
