(function($) {

$(function() {
    eum.loadImage('/assets/images/pm-header.jpg', $.proxy(function( img ) {
        var bg = $('.header .bg').css({
            'background-image': 'url(' + img.src + ')'
        });

        setTimeout(function() {
            bg.css('opacity', 1);
        }, 1000);
    }, this));

    $("#app-animation").threesixty({images:[
        "/assets/images/pm/PM_00.png",
        "/assets/images/pm/PM_01.png",
        "/assets/images/pm/PM_02.png",
        "/assets/images/pm/PM_03.png",
        "/assets/images/pm/PM_04.png",
        "/assets/images/pm/PM_05.png",
        "/assets/images/pm/PM_06.png",
        "/assets/images/pm/PM_07.png",
        "/assets/images/pm/PM_08.png",
        "/assets/images/pm/PM_09.png",
        "/assets/images/pm/PM_10.png",
        "/assets/images/pm/PM_11.png",
        "/assets/images/pm/PM_12.png",
        "/assets/images/pm/PM_13.png",
        "/assets/images/pm/PM_14.png",
        "/assets/images/pm/PM_15.png",
        "/assets/images/pm/PM_16.png",
        "/assets/images/pm/PM_17.png",
        "/assets/images/pm/PM_18.png",
        "/assets/images/pm/PM_19.png",
        "/assets/images/pm/PM_20.png",
        "/assets/images/pm/PM_21.png",
        "/assets/images/pm/PM_22.png",
        "/assets/images/pm/PM_23.png",
        "/assets/images/pm/PM_24.png",
        "/assets/images/pm/PM_25.png",
        "/assets/images/pm/PM_26.png",
        "/assets/images/pm/PM_27.png",
        "/assets/images/pm/PM_28.png",
        "/assets/images/pm/PM_29.png"
    ], method:'auto', direction:'forward', sensibility: 1,autoscrollspeed:80,loop:true});

    $("#flasher-animation").threesixty({images:[
        "/assets/images/pm/FLASH_00.png",
        "/assets/images/pm/FLASH_01.png",
        "/assets/images/pm/FLASH_02.png",
        "/assets/images/pm/FLASH_03.png",
        "/assets/images/pm/FLASH_04.png",
        "/assets/images/pm/FLASH_05.png",
        "/assets/images/pm/FLASH_05.png",
        "/assets/images/pm/FLASH_05.png",
        "/assets/images/pm/FLASH_08.png",
        "/assets/images/pm/FLASH_09.png",
        "/assets/images/pm/FLASH_10.png",
        "/assets/images/pm/FLASH_11.png",
        "/assets/images/pm/FLASH_12.png",
        "/assets/images/pm/FLASH_12.png",
        "/assets/images/pm/FLASH_12.png",
        "/assets/images/pm/FLASH_15.png",
        "/assets/images/pm/FLASH_16.png",
        "/assets/images/pm/FLASH_17.png",
        "/assets/images/pm/FLASH_18.png",
        "/assets/images/pm/FLASH_19.png",
        "/assets/images/pm/FLASH_20.png",
        "/assets/images/pm/FLASH_20.png",
        "/assets/images/pm/FLASH_20.png",
        "/assets/images/pm/FLASH_23.png",
        "/assets/images/pm/FLASH_24.png",
        "/assets/images/pm/FLASH_25.png",
        "/assets/images/pm/FLASH_26.png",
        "/assets/images/pm/FLASH_27.png",
        "/assets/images/pm/FLASH_28.png",
        "/assets/images/pm/FLASH_29.png"
    ], method:'auto', direction:'forward', sensibility: 1,autoscrollspeed:80});

    $("#tap-animation").threesixty({images:[
        "/assets/images/pm/TAP_00.jpg",
        "/assets/images/pm/TAP_01.jpg",
        "/assets/images/pm/TAP_02.jpg",
        "/assets/images/pm/TAP_03.jpg",
        "/assets/images/pm/TAP_04.jpg",
        "/assets/images/pm/TAP_05.jpg",
        "/assets/images/pm/TAP_06.jpg",
        "/assets/images/pm/TAP_07.jpg",
        "/assets/images/pm/TAP_08.jpg",
        "/assets/images/pm/TAP_09.jpg",
        "/assets/images/pm/TAP_10.jpg",
        "/assets/images/pm/TAP_11.jpg",
        "/assets/images/pm/TAP_12.jpg",
        "/assets/images/pm/TAP_13.jpg",
        "/assets/images/pm/TAP_14.jpg",
        "/assets/images/pm/TAP_15.jpg",
        "/assets/images/pm/TAP_16.jpg",
        "/assets/images/pm/TAP_17.jpg",
        "/assets/images/pm/TAP_18.jpg",
        "/assets/images/pm/TAP_19.jpg",
        "/assets/images/pm/TAP_20.jpg",
        "/assets/images/pm/TAP_21.jpg",
        "/assets/images/pm/TAP_22.jpg",
        //"/assets/images/pm/TAP_23.jpg",
        "/assets/images/pm/TAP_24.jpg",
        "/assets/images/pm/TAP_25.jpg",
        "/assets/images/pm/TAP_26.jpg",
        "/assets/images/pm/TAP_27.jpg",
        "/assets/images/pm/TAP_28.jpg",

        "/assets/images/pm/TAP_28.jpg",
        "/assets/images/pm/TAP_27.jpg",
        "/assets/images/pm/TAP_26.jpg",
        "/assets/images/pm/TAP_25.jpg",
        "/assets/images/pm/TAP_24.jpg",
        // "/assets/images/pm/TAP_23.jpg",
        "/assets/images/pm/TAP_22.jpg",
        "/assets/images/pm/TAP_21.jpg",
        "/assets/images/pm/TAP_20.jpg",
        "/assets/images/pm/TAP_19.jpg",
        "/assets/images/pm/TAP_18.jpg",
        "/assets/images/pm/TAP_17.jpg",
        "/assets/images/pm/TAP_16.jpg",
        "/assets/images/pm/TAP_15.jpg",
        "/assets/images/pm/TAP_14.jpg",
        "/assets/images/pm/TAP_13.jpg",
        "/assets/images/pm/TAP_12.jpg",
        "/assets/images/pm/TAP_11.jpg",
        "/assets/images/pm/TAP_10.jpg",
        "/assets/images/pm/TAP_09.jpg",
        "/assets/images/pm/TAP_08.jpg",
        "/assets/images/pm/TAP_07.jpg",
        "/assets/images/pm/TAP_06.jpg",
        "/assets/images/pm/TAP_05.jpg",
        "/assets/images/pm/TAP_04.jpg",
        "/assets/images/pm/TAP_03.jpg",
        "/assets/images/pm/TAP_02.jpg",
        "/assets/images/pm/TAP_01.jpg",
        "/assets/images/pm/TAP_00.jpg"
    ], method:'auto', direction:'forward', sensibility: 1,autoscrollspeed:80}); 
});

})(jQuery);
