/**
 * Created by shawn on 8/23/14.
 */


$(function() {
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
        pic2 = $("#showpic2"),
        back = $("#back");;
        if (winHeight < 750)
            winHeight = 750;// min Height.
        var y = a*winHeight + b;
        var mleft = -896*y/100.0;
        //console.info("y:",y);
        iphone.css({"background-size": y.toString()+"%",
                    "margin-left":mleft.toString()+"px"});

        var titleTop = winHeight - (winHeight/1.6);
        appname.css({"padding-top":titleTop.toString()+"px"});

        var pic2x = 702 * y / 100.0,
            pic2y = 777 * y / 100.0;
        pic2.css({"top":pic2y+"px","left":pic2x+"px"});


        var backx = 163 * y / 100.0,
            backy = 320 * y / 100.0;

        back.css({"top":backy+"px","left":backx+"px"});

        $("#cg").css({"top":(767 * y / 100.0) +"px","left":(643 * y / 100.0)+"px"});
        $("#cf").css({"top":(767 * y / 100.0) +"px","left":(428 * y / 100.0)+"px"});
        $("#cc").css({"top":(767 * y / 100.0) +"px","left":(213 * y / 100.0)+"px"});
        $("#cam").css({"top":(1078 * y / 100.0) +"px","left":(213 * y / 100.0)+"px"});
    }

    top.pageInAll = false; //default to show picture



    $("#showpic2 a").on("click",function(){
            var url = $(".iphone").css("background-image").toString();
            if (url.indexOf("2.png") > 0){
                url = url.replace("2.png",".png");
            }else{
                url = url.replace(".png","2.png");
            }
             $(".iphone").css({"background-image":url});
        });

    $("#back a").on("click",function(){
        showAll();
    })

    $(".pall a").on("click",function(sender){
        var t = $(sender.target);
        showChord();
        $(".iphone").css({"background-image":"url('/assets/images/ukechords/" + t.attr("fdata") + ".png')"});
    });

    function showAll(){
        if (top.pageInAll)
            return;
        $("#showpic2").hide();
        $("#back").hide();
        $(".iphone").css({"background-image":"url('/assets/images/ukechords/uc_all.png')"});
        $(".pall").show();
        top.pageInAll = true;
    }

    function showChord(){
        if (!top.pageInAll)
            return;
        $("#showpic2").show();
        $("#back").show();
        $(".pall").hide();
        top.pageInAll = false;
    }

    $(".cd-single-point").hide();

    top.pageInAll = true;
    showChord()


    $(window).on('resize', resizeMe);
    resizeMe();

    window.eum.preload(['/assets/images/ukechords/uc_c.png',
        '/assets/images/ukechords/uc_c2.png',
        '/assets/images/ukechords/uc_g.png',
        '/assets/images/ukechords/uc_g2.png',
        '/assets/images/ukechords/uc_am.png',
        '/assets/images/ukechords/uc_am2.png',
        '/assets/images/ukechords/uc_f.png',
        '/assets/images/ukechords/uc_f2.png',
        '/assets/images/ukechords/uc_all.png'
    ]);

})