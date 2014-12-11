/**
 * Created by zhuoqun on 11/28/14.
 */

$(function() {
    var BV = new $.BigVideo({useFlashForFirefox:false, container:$(".firstpage-container")});
	BV.init();
    BV.show([
        { type: "video/mp4",  src: "/assets/videos/iukebgvideo.mp4" },
        { type: "video/mp4",  src: "/assets/videos/iukebgvideo.webm" },
        { type: "video/mp4",  src: "/assets/videos/iukebgvideo.ogv" }
    ],{ambient:true,doLoop:true});

    BV.getPlayer().on("canplaythrough",function(){
         $("#big-video-vid_html5_api").css({"display":"inherit"});
    })

    var demovideo = videojs('demo', {
      children: {
        textTrackDisplay: false,
        loadingSpinner: false,
        bigPlayButton: false,
        controlBar: {
          children: {
            volumeControl: false,
            fullscreenToggle: false,
            playToggle: false,
            currentTimeDisplay: false,
            timeDivider: false,
            durationDisplay: false,
            remainingTimeDisplay: false,
            progressControl: false
          }
        }
      }
    });


    demovideo.ready(function(){
      //$('.vjs-mute-control').attr('class', 'vjs-mute-control vjs-control vjs-vol-0');
      this.userActive(false);
      this.muted(true);

    });
    top.vdo = demovideo;

    // a*878 + b = 50%
    // a*1414 + b = 85%
    var a = (90 -65) / ( 1253 - 878 ),
        b = 65 - a*878;

    function resizeMe(){
        var win =  $(window),
        winWidth = win.width(),
        winHeight = win.height(),
        iphone = $(".iphone"),
        demo = $("#demo");
        if (winHeight < 750)
            winHeight = 750;// min Height.
        var y = a*winHeight + b;
        var hBottom = 0;
        var mleft = (winWidth - 1031)/2;
        //console.info("y:",y);
        //
        if (winHeight < 1163){
            y = 83;
        }

        y = y > 100? 100: y;

        iphone.css({"background-size": y.toString()+"%",
                    "padding-top": 420 + y + "px",
                    //"background-position":"50% "+ (hBottom == 0 ? "100%":(100+hBottom)+"%"),
                    "margin-left":mleft+"px"});

        demo.css({"width": 7.23 * y, "left": 145 + (100 - y)*3.65 + "px" , "top": 49 + (100 - y)*3.65 + "px" , "height:": "auto"});

        //var titleTop = winHeight - (winHeight/1.6);
        //appname.css({"padding-top":titleTop.toString()+"px"});
    }

    $(window).on('resize', resizeMe);
    resizeMe();
    
    // Scroll Animation
    /*var songs_offset = $('#sec_intro').offset().top;
    var songlist = $('#songlist');
    var songdetail = $('#songdetail');
    var already_done = 0;
*/
    $(window).on('scroll', function() {
        /*if ( $(window).scrollTop() > songs_offset && !already_done) {
          songlist.animate({top:"60"}, 2000, function(){already_done=1;});
          songdetail.animate({top:"30"}, 2000, function(){already_done=1;});
        }*/
        checkSolo();
        checkPractice();
        checkSongs();
    });

    // Solo Hover Animation
    /*var solo_sidebar = $('.solo .sidebar');
    $('.solo .ui').hover(function (){
      solo_sidebar.animate({'right': 0});
    }, function (){
      solo_sidebar.animate({'right': -268});
    });*/

    function checkSolo(){
        var soloInScreen = $('.solo .sidebar').offset().top;
        var screenheight = $(window).innerHeight();
        var gap = screenheight * 0.2;//Reach 20% of the screen
        if($(window).scrollTop() > (soloInScreen-screenheight + gap)  &&
           $(window).scrollTop() < (soloInScreen) ){
            //In screen
            if($('.solo .sidebar').css("right") == "-268px")
                $('.solo .sidebar').animate({'right': 0});
        }else{
            if($('.solo .sidebar').css("right") == "0px")
                $('.solo .sidebar').animate({'right': -268});
        }
    }

    function checkPractice(){
        var imgObject = $('#practice_img');
        var imgInScreen = imgObject.offset().top;
        var screenheight = $(window).innerHeight();
        var offset = $(window).scrollTop() - imgInScreen + screenheight;
        var offsetScale = offset/screenheight;

        if(offsetScale<0) offsetScale = 0;
        if(offsetScale>1.5) offsetScale = 1.5;

        //Margin top start from 110px to 50px
        //img into the screen from bottom to top: offsetScale= 0->1
        var marginTop = 110*(1-offsetScale) +50*offsetScale;
        $('#practice_img').animate({"margin-top":(marginTop)+"px"});
    }


    function checkSongs(){
        var songImagesContainer = $('div.songs');
        var imgInScreen = songImagesContainer.offset().top;
        var screenheight = $(window).innerHeight();
        var offset = $(window).scrollTop() - imgInScreen + screenheight;
        var offsetScale = offset/screenheight;

        if(offsetScale<0) offsetScale = 0;
        if(offsetScale>1.5) offsetScale = 1.5;
        var songlistTop = 120-offsetScale*40;
        var songdetailTop = 120-offsetScale*80;

        $('#songlist').animate({"top":songlistTop+"px"});
        $('#songdetail').animate({"top": songdetailTop+"px"});

    }

    $('.iphone').fadeIn();
    $('#mute-video').click(function(){
        //$('#mute-video').html("&#xe006;");
        if(top.vdo.muted()){
            top.vdo.muted(false);
            $('#mute-video').html("&#xe006;");
        }else{
            top.vdo.muted(true);
            $('#mute-video').html("&#xe003;");
        }
    });

});

