(function($) {

/*
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
} */

$(function() {
    setInstruPosition();
    $(window).on('resize', setInstruPosition);

    setTimeout(function() {
        var offset = parseInt($('#guitar').css('left')),
            move = 100;

        $('#guitar').css('left', offset - move).animate({
            left: offset,
            opacity: "show"
        }, 600);
        
        $('#violin').css('right', offset - move).animate({
            right: offset,
            opacity: "show"
        }, 600);
    }, 1000);

});

function setInstruPosition() {
    var mainWidth = 980,
        screen = $(window).width(),
        instruWidth = 420,
        instruAvaliable = (screen - 980) / 2,
        offset = instruAvaliable - instruWidth;

    $('#guitar').css('left', offset);
    $('#violin').css('right', offset);
}

})(jQuery);
