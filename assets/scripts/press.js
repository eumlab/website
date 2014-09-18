/**
 * Created by shawn on 8/10/14.
 */
$(function() {

    $("#show-more").on("click",function(){
        var hasStared = $("#press-coverage").hasClass("stared");
        if(hasStared){
            $("#press-coverage").removeClass("stared");
            $("#show-more").html("Only Featured");
        }else{
            $("#press-coverage").addClass("stared");
            $("#show-more").html("Read All");
        }
    })


});
