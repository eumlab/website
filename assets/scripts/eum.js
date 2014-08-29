(function($) {

window.eum = {
    loadImage: function( file, callback ) {
        var img = new Image();

        if ( callback ) {
            img.onload = function() {
                callback( img );
            };

            img.onerror = function() {
                callback();
            }
        }

        if ( typeof file == "string" ) {
            img.src = file;
        } else if ( file.nodeName && file.nodeName == "IMG" ) {
            img.src = file.src;
        } else if ( window.FileReader && FileReader.prototype.readAsDataURL ) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                img.src = e.target.result;
            };
            fileReader.readAsDataURL( file );
        } else {
            callback();
        }
    },

    preloadImages: function( images ) {
        $.each( images, function( i, img ) {
            eum.loadImage( img );
        });
    },
    preload:function (arrayOfImages) {
        $(arrayOfImages).each(function(){
            $('<img/>')[0].src = this;
            // Alternatively you could use:
            // (new Image()).src = this;
        });
    },

    supportTransition: function() {
        var b = document.body || document.documentElement;
        var s = b.style;
        var p = 'transition';
        if ( typeof s[p] == 'string' ) {
            return true;
        }

        // Tests for vendor specific prop
        v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
        p = p.charAt(0).toUpperCase() + p.substr(1);
        for( var i=0; i<v.length; i++ ) {
            if ( typeof s[v[i] + p] == 'string' ) {
                return true;
            }
        }

        return false;
    },

    transitionEnd: function( el, callback ) {
        if ( eum.supportTransition()) {
            var eventName = "transitionend";
            if ( $.browser.webkit ) {
                eventName = "webkitTransitionEnd";
            } else if ( $.browser.msie ) {
                eventName = "transitionend";
            } else if ( $.browser.opera ) {
                eventName = "oTransitionEnd";
            }

            el.one( eventName, callback );
        } else {
            setTimeout( callback, 20 );
        }
    },

    // 生成threesixty用的帧数组
    // prefix: 图片的路径加名字前缀
    // count: 图片数量
    // fixed: 后缀有几位
    genAnimationArray: function(opts) {
        opts = $.extend({
            prefix: '',
            count: 1,
            fixed: 2,
            format: 'png'
        }, opts);

        if (opts.count > Math.pow(10, opts.fixed) - 1) {
            throw "arguments error";
        }

        var i = 0,
            n,
            result = [];

        for (; i < opts.count; i++) {
            n = i.toString();

            while (n.length < opts.fixed) {
                n = '0' + n;
            }

            result.push(opts.prefix + n + '.' + opts.format);
        }

        return result;
    },

    scrollTo: function( target, opts ) {
		opts = $.extend({
			anim: true,
			container: null,
			callback: $.noop
		}, opts );
		
		var offset = null,
			container = opts.container ? $( opts.container ) : $( "html, body" );
		if ( typeof target == "object" 
			&& ( typeof target.top == "number" || typeof target.left == "number" )) {
			offset = target;
		} else {
			var targetOffset = $( target ).offset(),
				containerOffset = container.offset() || { top: 0, left: 0 };
				
			offset = {
				top: targetOffset.top - containerOffset.top - 30,
				left: targetOffset.left - containerOffset.left - 30
			};
		}

		// scrollLeft一定要写在scrollTop前面，否则safari下面就不会有效...
		// by tinyfive
		if ( opts.anim ) {
			container.animate({
				scrollLeft: offset.left,
				scrollTop: offset.top
			}, 500, opts.callback);
		} else {
			container.scrollLeft( offset.left )
			    .scrollTop( offset.top );
			opts.callback();
		}
	},

    showMenuContainer : function () {
        var m = $("#menu-apps-container");
        if(m.hasClass("not-shown")){
            $("#menu-apps-container").css({"visibility":"visible"});
            m.removeClass("not-shown");
            $("#menu-item-products sub").html("");
        }
    },
    hideMenuContainer:function () {
        var m = $("#menu-apps-container");
        if(!m.hasClass("not-shown")){
            m.addClass("not-shown");
            $("#menu-item-products sub").html("");
        }
        setTimeout(function(){
            $("#menu-apps-container").css({"visibility":"hidden"});
        },300);
    }
}

$(function() {

    $("#menu-logo").click(function(){
        if($.fn.fullpage == undefined){
            //In other page
            window.location.href = "/";
        }else{
            $.fn.fullpage.moveTo("intro");
        }

    });

    $("#menu-item-products").click(function(){
        var m = $("#menu-apps-container");
        if(m.hasClass("not-shown")){
            window.eum.showMenuContainer();
        }else{
            window.eum.hideMenuContainer();
        }
    });
    $("#menu-apps-container").click(function(me){
        var m = $("#menu-apps-container");
        if($(me.target).attr('id') != "menu-apps-container"){
            return;
        }
        window.eum.hideMenuContainer();
    });

    function changeReviews(){
        var wpm = 200.0;//Words per Min
        var dpm = 60.0 * 1000.0 /wpm; //Delay in ms
        var idx = top.reviewIdx;
        if(idx >= top.reviews.length)
            idx=0;
        var content = top.reviews[idx];
        var contentWords = content.split(' ').length;
        $("#review-content").fadeOut(300,function(){
            $("#review-content").html(content);
            $("#review-change-progressbar").css({width:"0%"});
            $("#review-content").fadeIn(300,function(){
                var delay = contentWords * dpm;
                //console.info("Words",contentWords," Delay:", delay);
                $("#review-change-progressbar").animate({width:"100%"},delay,"linear",function(){
                    changeReviews();
                });
            });
        });
        top.reviewIdx = idx+1;
    }
    if(top.reviews != undefined){
        changeReviews();

    }

});

})(jQuery);
