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
            mcw.loadImage( img );
        });
    }
}

})(jQuery);
