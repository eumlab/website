(function($) {

$(function() {
    eum.loadImage('/assets/images/drh-header.jpg', $.proxy(function( img ) {
        var bg = $('.header .bg').css({
            'background-image': 'url(' + img.src + ')'
        });

        setTimeout(function() {
            bg.css('opacity', 1);
        }, 1000);
    }, this));

    $(".daw-nav").on('click', 'a', selectDAW)
        .find('[data-type=logic]').trigger('click');
});

function selectDAW(e) {
    var it = $(e.target);

    it.siblings('.selected').removeClass('selected')
        .end().addClass('selected');

    var type = it.data('type'),
        count = it.data('count');

    /*
       var its = ["","",0];
       var itid = it.attr("id");
       its[1] = itid.substr(itid.indexOf("-")+1);
       its[2] = its[1].substr(its[1].indexOf("-")+1);
       its[1] = its[1].substr(0,its[1].indexOf("-"));

       var ioff = 0;
       if($.browser.msie && (jQuery.browser.version.toString().indexOf("7")==0||jQuery.browser.version.toString().indexOf("8")==0)){
       ioff = 1;
       }

       if(its.length != 3)
       return;
    //alert(its);
    */


    var inner = '<div class="wmuSlider"><div class="wmuSliderWrapper">';

    /* var rtFlag = (window.devicePixelRatio==2?"@2x":"");
       var i;
       for( i = 0;i< Number(its[2])+ioff;i++){
       inner += '<article>\
       <img width="479" height="360" src="../images/it/'+ its[1] +'-' + (i+1).toString() +rtFlag +'.jpg" /> \
       </article>';
       }
       */

    for (var i = 1; i < count+1; i++) {
        inner += '<article>\
            <img width="388" height="291" src="/assets/images/daw/'+ type +'-' + i + '.jpg" />\
            </article>';
    }

    inner+= '</div></div>';

    $("#daw-slide").html(inner)
        .find('.wmuSlider').wmuSlider({
            animation:'slide',
            paginationControl: true,
            navigationControl: false
        });
}

})(jQuery);
