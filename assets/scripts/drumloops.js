/**
 * Created by shawn on 8/23/14.
 */

$(function() {
    var BV = new $.BigVideo({useFlashForFirefox:false,container:$(".firstpage-container")});
	BV.init();
    BV.show([
        { type: "video/mp4",  src: "/assets/videos/dlbgvideo.mp4" },
        { type: "video/mp4",  src: "/assets/videos/iukebgvideo.webm" },
        { type: "video/mp4",  src: "/assets/videos/iukebgvideo.ogv" }
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
    }

    $(window).on('resize', resizeMe);
    resizeMe();
});