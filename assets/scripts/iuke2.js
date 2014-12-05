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

    // a*878 + b = 50%
    // a*1414 + b = 85%
    var a = (90 -65) / ( 1253 - 878 ),
        b = 65 - a*878;

    function resizeMe(){
        var win =  $(window),
        winWidth = win.width(),
        winHeight = win.height(),
        iphone = $(".iphone"),
        appname = $("#appname");
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

        iphone.css({"background-size": y.toString()+"%",
                    //"background-position":"50% "+ (hBottom == 0 ? "100%":(100+hBottom)+"%"),
                    "margin-left":mleft+"px"});

        //var titleTop = winHeight - (winHeight/1.6);
        //appname.css({"padding-top":titleTop.toString()+"px"});
    }

    $(window).on('resize', resizeMe);
    resizeMe();
});

