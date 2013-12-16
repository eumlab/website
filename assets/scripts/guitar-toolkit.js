(function($) {

$(function() {
    /*eum.loadImage('/assets/images/gt-header.jpg', $.proxy(function( img ) {
        var bg = $('.header .bg').css({
            'background-image': 'url(' + img.src + ')'
        });

        setTimeout(function() {
            bg.css('opacity', 1);
        }, 1000);
    }, this));
*/
    var images = [
        "/assets/images/GTV2/GTV2_00.jpg",
        "/assets/images/GTV2/GTV2_01.jpg",
        "/assets/images/GTV2/GTV2_02.jpg",
        "/assets/images/GTV2/GTV2_03.jpg",
        "/assets/images/GTV2/GTV2_04.jpg",
        "/assets/images/GTV2/GTV2_05.jpg",
        "/assets/images/GTV2/GTV2_06.jpg",
        "/assets/images/GTV2/GTV2_07.jpg",
        "/assets/images/GTV2/GTV2_08.jpg",
        "/assets/images/GTV2/GTV2_09.jpg",
        "/assets/images/GTV2/GTV2_10.jpg",
        "/assets/images/GTV2/GTV2_11.jpg",
        "/assets/images/GTV2/GTV2_12.jpg",
        "/assets/images/GTV2/GTV2_13.jpg",
        "/assets/images/GTV2/GTV2_14.jpg",
        "/assets/images/GTV2/GTV2_15.jpg",
        "/assets/images/GTV2/GTV2_16.jpg",
        "/assets/images/GTV2/GTV2_17.jpg",
        "/assets/images/GTV2/GTV2_18.jpg",
        "/assets/images/GTV2/GTV2_19.jpg",
        "/assets/images/GTV2/GTV2_20.jpg",
        "/assets/images/GTV2/GTV2_21.jpg",
        "/assets/images/GTV2/GTV2_22.jpg",
        "/assets/images/GTV2/GTV2_23.jpg",
        "/assets/images/GTV2/GTV2_24.jpg",
        "/assets/images/GTV2/GTV2_25.jpg",
        "/assets/images/GTV2/GTV2_26.jpg",
        "/assets/images/GTV2/GTV2_27.jpg",
        "/assets/images/GTV2/GTV2_28.jpg",
        "/assets/images/GTV2/GTV2_29.jpg",
        "/assets/images/GTV2/GTV2_30.jpg"
    ];

    var ani = $("#app-animation").threesixty({images:images, method:'auto', direction:'forward', sensibility: 1,autoscrollspeed:40,loop:false,autostart:"0" });

    var playffw = ani.data("playFFW");
    var playrev = ani.data("playREV");
    var goFirstFrame = ani.data("goFirstFrame");


    $(window).on("scroll",function(e){
        var top  = $(window).scrollTop();
        //console.log(top);
        if(top > 550 && top < 1200){
            playffw();
        }else{
            playrev();
        }

    });

});

})(jQuery);
