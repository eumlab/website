/**
 * Created by shawn on 8/23/14.
 */

$(function() {
    var BV = new $.BigVideo({useFlashForFirefox:false,container:$(".firstpage-container")});
	BV.init();
    BV.show([
        { type: "video/mp4",  src: "/assets/videos/pmbgvideo.mp4" },
        { type: "video/mp4",  src: "/assets/videos/pmbgvideo.webm" },
        { type: "video/mp4",  src: "/assets/videos/pmbgvideo.ogv" }
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
        appname = $("#appname"),
        screen = $(".screen-ani");

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
        var scale = y/100.0;
        screen.css({"margin-left": (163 * scale) + "px",
        "margin-top":(365 * scale) + "px",
        "height":(256 *scale )+ "px",
        "width":(570 * scale)+"px"});

        //$(".firstpage-container").css({"height": $(window).height() + "px"});
        //console.info("do?");
    }

    $(window).on('resize', resizeMe);
    resizeMe();


    function onScroll(e) {
        var newScroll =  $(window).scrollTop();
        var twoWay = $(".two-row-container");
        //Jog Dial
        var orgPoz = twoWay.offset().top;
        var offset = orgPoz - newScroll;

        offset = offset/9.0;//Power


        var bgPozY = -10;
        bgPozY = bgPozY + offset;
        twoWay.css({"margin-top":bgPozY+"px"});

        $(".poly-closeup").css({"background-position-y":(100 + offset)+"px"});

        lastScroll = newScroll;

        /*if(newScroll > ($(window).height() - 100) &&
           newScroll < $(window).height() ){
            $("#idx-header").removeClass("glow").addClass("hide");
        }else if(newScroll > $(window).height()){
            $("#idx-header").removeClass("hide");
        }else{
            $("#idx-header").addClass("glow");
        }
        if(newScroll < 100){
            $("#idx-header").removeClass("hide");
        }*/

    }
    //Scroll
    var lastScroll = $(window).scrollTop();
    $(window).scroll(onScroll);
    onScroll(null);

    $(document).on("scrollstop",function(){
      //Hash
      /*  $('div.section').each(function(){
                if (
                   $(this).offset().top < window.pageYOffset + 10
        //begins before top
                && $(this).offset().top + $(this).height() > window.pageYOffset + 10
        //but ends in visible area
        //+ 10 allows you to change hash before it hits the top border
                ) {
                    window.location.hash = $(this).attr('id');
                }
        });*/
    });

    var imagesUrl = [];
    for(i = 0 ; i< 44; i++){
        j = i.toString();
        if(j.length == 1)j = "0"+j;
        imagesUrl[i] = "/assets/images/pm2/PMH@24fps/PMH_" + j + ".png";
    }
    window.eum.preload(imagesUrl);
    $(".screen-ani").threesixty({images:imagesUrl, method:'auto', direction:'forward', sensibility: 1,autoscrollspeed:40,loop:true});
    $("#sync-vib").threesixty({images:imagesUrl, method:'auto', direction:'forward', sensibility: 1,autoscrollspeed:40,loop:true});

    $("#sync-beat").threesixty({images:imagesUrl, method:'auto', direction:'forward', sensibility: 1,autoscrollspeed:40,loop:true,onPlay:function(idx){
        //console.info("Where",idx);
        if(idx == 0){
            $(".flash-light").fadeIn(1,function(){
                $(".flash-light").fadeOut(300);
            });
            $(".sync-vib").fadeIn(1,function(){
                $(".sync-vib").fadeOut(300);
            });
        }

        if(idx == 0){
            top.inMuteBar = !top.inMuteBar;
            //console.info("in mute?",top.inMuteBar);
        }

        //Sync with beats
        if(!top.inMuteBar){
            if(idx == 0){
                //Beat 1
                $(".note-container img").attr("src","/assets/images/pm2/trainer-notes-1.png");
                $("#trainer-beat-1").fadeTo(1,1).fadeTo(400,0.01);
                $("#trainer-wave").css({"width":"0"});
                $("#trainer-wave").stop().animate({width:375},3692,"linear");
            }else if(idx == 12){
                //Beat 2
                $(".note-container img").attr("src","/assets/images/pm2/trainer-notes-2.png");
                $("#trainer-beat-2").fadeTo(1,1).fadeTo(400,0.01);
            }else if(idx == 22){
                //Beat 3
                $(".note-container img").attr("src","/assets/images/pm2/trainer-notes-3.png");
                $("#trainer-beat-3").fadeTo(1,1).fadeTo(400,0.01);
            }else if(idx == 33){
                //Beat 4
                $(".note-container img").attr("src","/assets/images/pm2/trainer-notes-4.png");
                $("#trainer-beat-4").fadeTo(1,1).fadeTo(400,0.01);
            }
        }else{
            //Mute bar
            $(".note-container img").attr("src","/assets/images/pm2/trainer-notes-5.png");
        }



    }});
    top.inMuteBar = true;
    $(".beats-container .beat").fadeTo(1,0.01);
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

    $("#show-poly-video").on("click",function(){
       playVideo("5Yk5nQd0HaI","How the Polyrhythm Works");
    });

    $("#show-trainer-video").on("click",function(){
       playVideo("S4B9yihy8LU","How the Rhythm Trainer Works");
    });

});