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
    }
}

})(jQuery);
