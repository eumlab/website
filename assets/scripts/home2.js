(function($) {


/*$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 500,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,
   direction: "vertical"
});
*/

var pages = ['intro', 'ukulele','figure','press'];

top.fullpageCreated = false;
function createFullPage(){
    if(top.fullpageCreated)
        return;
    $('#fullpage').fullpage({
        verticalCentered: false,
        resize : false,
        //sectionsColor : ['#ccc', '#fff'],
        anchors:pages,
        //scrollingSpeed: 500,
        //easing: 'ease',
        //menu: true,
        navigation: true,
        navigationPosition: 'right',
        //navigationTooltips: ['', 'secondSlide'],
        //slidesNavigation: true,
        //slidesNavPosition: 'bottom',
        loopBottom: false,
        loopTop: false,
        //loopHorizontal: true,
        //autoScrolling: true,
        //scrollOverflow: false,
        css3: true,
        //paddingTop: '3em',
        //paddingBottom: '10px',
        //normalScrollElements: '#element1, .element2',
        //normalScrollElementTouchThreshold: 5,
        keyboardScrolling: true,
        //touchSensitivity: 15,
        //continuousVertical: false,
        //animateAnchor: true,
        //sectionSelector: '.section',
        //slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
            var introcss = "insec-"+pages[index-1];
            $("body").removeClass(introcss);

            introcss = "insec-"+pages[nextIndex-1];
            $("body").addClass(introcss);

            window.eum.hideMenuContainer();

        },
        afterLoad: function(anchorLink, index){
            top.currentSectionIndex = index;
        },
        afterRender: function(){
            setAppsPosition();
            //console.info("LOAD");
            var introcss = "insec-"+pages[0];
            $("body").addClass(introcss);
        },
        afterResize: function(){
            setAppsPosition();
        }
        //,
        //afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        //onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
    top.fullpageCreated = true;
}

top.quoidx = 0;
var quos = [
    "I've been using this app for as long as I can remember. It's an amazing app and definitely the best Metronome app I've found so far!!	",
    "Has all the features I could have wanted and plenty more besides. Works like a hot damn. Excellent value!",
    "Having a metronome everywhere I go is extremely helpful. When I'm in the band room it's great to have, this way I don't have to carry a metronome in my case",
    "Many great things about this app but the best by far is the ease of using the app. It's very simple to use unlike many other metronome apps",
    "I first learn to play songs by playing to them, but if it wasn't for this app back a year ago I would have never learned the chords and theory I did with this app. This app is the only app that had such a sincerely built approach to the ukulele. Try it because you will not be disappointed.",
    "I have used several tuning applications with my iPhone and this is the best one I have ever used. It's accurate and very fast."
];
function changeQuos(){
    var idx = top.quoidx;
    if(idx >= quos.length)idx=0;
    var content = quos[idx];

    $("#quo-content").fadeOut(300,function(){
        $("#quo-content").html(content);
        $("#quo-content").fadeIn(300,function(){
            setTimeout(function(){
                changeQuos();
            },8000);//Delay Qua Time
        });
    });


    top.quoidx = idx+1;
}

function heartBeat(){
    var t = $(".figure-text-container h3 em");
    //t.css({"color":"#f0f"});
    t.addClass("beat");
    setTimeout(function(){
        t.removeClass("beat");
        setTimeout(function(){
            heartBeat();
        },757);
    },90)
}

function resizeForUke(){
    var win = $('.main'),
        winWidth = win.width(),
        winHeight = win.height();

    var scrollHeight = document.body.scrollHeight;

    if(winHeight < 1000){
        $("#sec-uke").removeClass("sms");
        $("#sec-uke").addClass("tms");
    }else if(winHeight < 1195){
        $("#sec-uke").addClass("sms");
        $("#sec-uke").removeClass("tms");
    }else{
        //Default
        $("#sec-uke").removeClass("sms");
        $("#sec-uke").removeClass("tms");
    }
}


function resizeForFigures(){
    var win = $('.main'),
        winWidth = win.width(),
        winHeight = win.height();

    var scrollHeight = document.body.scrollHeight;

    if(winHeight < 800){
        $("#sec-figure").removeClass("sms");
        $("#sec-figure").addClass("tms");
    }else if(winHeight < 1100){
        $("#sec-figure").addClass("sms");
        $("#sec-figure").removeClass("tms");
    }else{
        //Default
        $("#sec-figure").removeClass("sms");
        $("#sec-figure").removeClass("tms");
    }

}

function resizeForPress(){
    var win = $('.main'),
        winWidth = win.width(),
        winHeight = win.height();

    var scrollHeight = document.body.scrollHeight;

    if(winHeight < 840){
        $("#sec-press").removeClass("sms");
        $("#sec-press").addClass("tms");
    }else if(winHeight < 1100){
        $("#sec-press").addClass("sms");
        $("#sec-press").removeClass("tms");
    }else{
        //Default
        $("#sec-press").removeClass("sms");
        $("#sec-press").removeClass("tms");
    }

}


function checkScreenSize(){
     var win =  $(window),
        winWidth = win.width(),
        winHeight = win.height();
    //console.info(winHeight);
    if (winHeight < 700){

        if(top.fullpageCreated){
            $.fn.fullpage.destroy("all");
            top.fullpageCreated = false;
        }

        $("html").addClass("tiny");
        setAppsPosition();

    }else{
        $("html").removeClass("tiny");
        createFullPage();
    }
}
function setAppsPosition() {

    var win = $(window),
        winWidth = win.width(),
        winHeight = win.height();

    var scrollHeight = document.body.scrollHeight;

    var gateHeight = 1280,
        gateMinHeight = 985,
        topOffset = -160;

    var imacTop;

    if (winHeight > gateHeight){
        //Too High
        imacTop = topOffset + (winHeight - gateHeight);
    }
    else if( winHeight <  gateMinHeight ){
        imacTop = topOffset +  (winHeight - gateMinHeight);
    }
    else{
       imacTop = topOffset;
    }
    imacTop = imacTop>0?0:imacTop;
    imacTop = imacTop<-100?-100:imacTop;

    $("#main-imac").css({top:imacTop});

    //////Background size:
    if( winHeight < 1000 ){
        $(".main").addClass("sms");

    }else{
        $(".main").removeClass("sms");
    }

    setTimeout(function(){
        $("#main-icon-container .icon-item").addClass("basic-ani");
    },500);

    //Change iMac Size
    if( winHeight <= 1230){
        $("#main-imac").css({"background-size":"100%"});
        $("#main-imac").css({top:imacTop });
    }else{
        $("#main-imac").css({"background-size":"auto"});
    }


    //Fix Width
    var iconContainerWidth = 1170;
    var icwGate = 500;

    if( $(".main").hasClass("sms")){
        //Has small
        icwGate = 200;
    }

    var diff =  winWidth - (iconContainerWidth + icwGate);
    diff = diff>0?0:diff; // Make sure no border
    $("#main-ipad").css({left:diff});
    $("#main-iphone").css({right:diff});


    if(winWidth >= 1900){
        $(".main-section-intro").addClass("main-section-intro-cover");
    }else{
        $(".main-section-intro").removeClass("main-section-intro-cover");
    }

    /*var win = $('.container'),
        winWidth = win.width(),
        winHeight = win.height();

    var scrollHeight = document.body.scrollHeight;

    var apps = $('#apps'),
        appsWidth = apps.width(),
        appsHeight = apps.height();

    var top, right;

    if ( winWidth <= 1000 &&  winHeight <= 615 ) {
        top = 140;
        right = 260;
    } else if ( winWidth >= 1000 && winHeight <= 615 ) {
        top = (140 + appsHeight/2) * winWidth/1000 - appsHeight/2;
        right = (260 + appsWidth/2) * winWidth/1000 - appsWidth/2;
    } else if ( winWidth <= 1000 && winHeight >= 615 ) {
        top = (140 + appsHeight/2) * winHeight/615 - appsHeight/2;
        right = 220;
    } else {
        top = (140 + appsHeight/2) * winHeight/615 - appsHeight/2;
        right = (260 + appsWidth/2) * winWidth/1000 - appsWidth/2;
    }

    apps.css({
        top: top,
        right: right
    });*/
    resizeForUke();
    resizeForFigures();
    resizeForPress();
}
    checkScreenSize();
    changeQuos();
    heartBeat();
    $(window).on('resize', checkScreenSize);

    $(function() {
        top.currentSectionIndex = 0;



        setAppsPosition();



        //Uke Apps Click
        $("#ukeapp-icons-container li a").click(function(me){
            var t = $(me.target);
            $("#ukeapp-icons-container li").removeClass("active");
            var dt = t.parent().attr("data");
            t.parent().parent().addClass("active");

            var scc = $("#uke-app-sc-id-"+dt);
            $(".uke-app-sc-item").removeClass("active");
            scc.addClass("active");

            $(".uke-app-sc-container").append(scc);


        });
    });

    setTimeout(function(){
        $("#pre-loader").fadeOut(300,function(){
            $("#pre-loader").hide();
        });
    },1000);

})(jQuery);
