/**
 * Created by shawn on 8/23/14.
 */

$(function() {
    var BV = new $.BigVideo({useFlashForFirefox:false,container:$(".firstpage-container")});
	BV.init();
    BV.show([
        { type: "video/mp4",  src: "/assets/videos/btbgvideo.mp4" },
        { type: "video/mp4",  src: "/assets/videos/btbgvideo.webm" },
        { type: "video/mp4",  src: "/assets/videos/btbgvideo.ogv" }
    ],{ambient:true,doLoop:true});

    BV.getPlayer().on("canplaythrough",function(){
         $("#big-video-vid_html5_api").css({"display":"inherit"});
    })

    // a*878 + b = 50%
    // a*1414 + b = 85%
    var a = (78 - 55) / ( 1414 - 878 ),
        b = 55 - a*878;

    function resizeMe(){
        var win =  $(window),
        winWidth = win.width(),
        winHeight = win.height(),
        iphone = $(".iphone"),
        appname = $("#appname");

        if (winHeight < 750)
            winHeight = 750;// min Height.
        var y = a*winHeight + b;
        var mleft = -896*y/100.0;
        //console.info("y:",y);
        iphone.css({"background-size": y.toString()+"%",
                    "margin-left":mleft.toString()+"px"});

        var titleTop = winHeight - (winHeight/1.6);
        appname.css({"padding-top":titleTop.toString()+"px"});

        //screen.css({"transform":"scale("+ y/100.0 +")"});
        //Screen Animation
        /*var scale = y/100.0;
        screen.css({"margin-left": (163 * scale) + "px",
        "margin-top":(365 * scale) + "px",
        "height":(256 *scale )+ "px",
        "width":(570 * scale)+"px"});*/

        //$(".firstpage-container").css({"height": $(window).height() + "px"});
        //console.info("do?");

        //Check Tuner for small Screen
        var tuner = $("#tuner-ani-container");
        var tunerWidth = $(window).width() * 0.6;
        if(tunerWidth <= 840){
            tuner.css({"margin-left":(tunerWidth-840) + "px"});
        }else{
            tuner.css({"margin-left":"auto"});
        }
    }

    $(window).on('resize', resizeMe);
    resizeMe();


    function onScroll(e) {
        var newScroll =  $(window).scrollTop();
        var tools = $(".tools-4-iphones");
        //Jog Dial
        var orgPoz = tools.offset().top;
        var offset = orgPoz - newScroll;

        offset = offset/9.0;//Power


        var bgPozY = -10;
        bgPozY = bgPozY + offset;
        //twoWay.css({"margin-top":bgPozY+"px"});

        tools.css({"background-position-y":(0 + offset)+"px"});

        lastScroll = newScroll;

        var tunerAniContainer = $("#tuner-ani-container");
        offset = tunerAniContainer.offset().top - newScroll;
        offset = offset/9.0; //Power
        tunerAniContainer.css({"margin-bottom":(-100 - offset)+"px"});

        offset = $(".progression-closeup").offset().top - newScroll;
        offset = offset/9.0;
        $(".progression-closeup").css({"background-position-y":(-100 + offset)+"px"});

    }

    //Scroll
    var lastScroll = $(window).scrollTop();
    $(window).scroll(onScroll);
    onScroll(null);


    //Video
    /*var player = $('#polyrhythm').mediaelementplayer({
        features: ['playpause','progress','volume','fullscreen'],


    });*/
    top.videoPopped = false;
    //CMkZyGEyoHs
    function playVideo(id,title){
        if(!top.videoPopped){
            //$("#popup-wrap").show();
            $("#popup-wrap").fadeIn(300);
            top.videoPopped = true;
        }
        $("#video-title").html(title);
        $("#video-container").html('<iframe width="853" height="480" src="//www.youtube.com/embed/' + id + '?rel=0&autoplay=1&showinfo=0" frameborder="0" allowfullscreen></iframe>');
    }
    $("#popup-wrap").on("click",function(){
        $("#popup-wrap").fadeOut(300,function(){
            $("#popup-wrap").hide();
            $("#video-container").html("");
            top.videoPopped = false;
        });
    });

    $("#show-tuner-video").on("click",function(){
       playVideo("CMkZyGEyoHs","How the Tuner Works");
    });

    $("#show-metronome-video").on("click",function(){
       playVideo("uAt_1ok0ghQ","Metronome and Drum Loops");
    });

    $("#show-progressions-video").on("click",function(){
       playVideo("Yun9zpIRA_o","How the Chord Progression Works");
    });


    //♯
    var pozes = [["C Major/ A Minor",0,"c"],
                ["G♭ Major/ E♭ Minor",180,"gb"],
                ["G Major/ E Minor",-30,"g"],
                ["A Major/ F♯  Minor",-90,"a"]
                ]
    var currentPoz = 0;
    function nextPoz(){
        var idx = currentPoz%4;
        var currentItem = pozes[idx];
        $("#chords-5th").css({
                        '-webkit-transform': 'rotate(' + currentItem[1] + 'deg)',
                        '-moz-transform': 'rotate(' + currentItem[1] + 'deg)',
                        '-ms-transform': 'rotate(' + currentItem[1] + 'deg)',
                        '-o-transform': 'rotate(' + currentItem[1] + 'deg)',
                        'transform': 'rotate(' + currentItem[1] + 'deg)',
                        'zoom': 1
        });
        $("#chords-5th-ks").html(currentItem[0]);

        /*$("#chords-5th-iphone").css({"background-image":"url('/assets/images/ut/transpose-" + currentItem[2] + ".jpg')"})
        setTimeout(function(){
            $("#chords-5th-iphone").css({"background-image":"url('/assets/images/ut/transpose-" + currentItem[2] + "2.jpg')"})
        },1000)
*/
        $("#chords-5th-iphone").css({"background-image":"url('/assets/images/bt/transpose-" + currentItem[2] + "2.jpg')"})
        currentPoz++;
        setTimeout(function(){
            nextPoz();
        },6000);
    }
    nextPoz();

});