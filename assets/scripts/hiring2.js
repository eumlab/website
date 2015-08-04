/**
 * Created by shawn on 8/23/14.
 */

$(function() {
    var BV = new $.BigVideo({useFlashForFirefox:false,container:$(".hiring-header")});
	BV.init();
    BV.show([
        { type: "video/mp4",  src: "/assets/videos/hrpage_background.mp4" },
        { type: "video/mp4",  src: "/assets/videos/pmbgvideo.webm" },
        { type: "video/mp4",  src: "/assets/videos/pmbgvideo.ogv" }
    ],{ambient:true,doLoop:true});

    BV.getPlayer().on("canplaythrough",function(){
         $("#big-video-vid_html5_api").css({"display":"inherit"});
    })

    function onScroll(e) {
        var newScroll =  $(window).scrollTop();

        var startY = $(".team-photo").offset().top - $(window).height();
        var endY = $(".team-photo").offset().top + $(".team-photo").height();
        var onscreenratio = (newScroll - startY) / (endY - startY);
        var offset = -onscreenratio * 300;//onscreenratio * 1207;
        $(".team-photo").css({"background-position-y":offset+"px"});


        lastScroll = newScroll;

        if(lastScroll > $(".hiring-section-container").offset().top){
            $(".position-bar").addClass("display");
        }else{
            $(".position-bar").removeClass("display");
        }

        var fi = 0;
        for(var i = 0; i < postions.length -1;i++){
            var poz = newScroll + $(window).height()/2;

            if(poz > postions[i] && poz < postions[i+1]){
                fi = i;
            }
            if(poz > postions[i+1]){
                fi = i+1;
            }


        }

        //console.info("in ",fi);
        $(".position-bar ul li").removeClass("selected");
        $($(".position-bar ul li")[fi]).addClass("selected");


    }
    //Scroll
    var postions = [];
    for(var i = 0; i < $(".position").length;i++){
        postions.push($($(".position")[i]).offset().top);
    }
    //console.info(postions);
    var lastScroll = $(window).scrollTop();
    $(window).scroll(onScroll);
    onScroll(null);

    $(".position-bar ul li a").on("click",function(e) {
        var item = $(e.target);
        //$(".position-bar ul li").removeClass("selected");
        //item.parent().addClass("selected");
        //top.item = item;

        var currentIdx = 0;
        for(var i = 0; i < $(".position-bar ul li").length; i++){
            if($($(".position-bar ul li")[i]).is(item.parent())){
                currentIdx = i;
                break;
            }
        }
        //console.info(currentIdx);

        var sTop = postions[currentIdx] -64;
        $('html,body').animate({ scrollTop: sTop }, 300);
    });


});