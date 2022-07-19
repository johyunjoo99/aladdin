$(function(){
    
    function next(){
        var fullWith = $(".slide_img").width();
        var slideWith = fullWith / 8;

        $(".slide_img:first").stop().animate({marginLeft: -slideWith}, 1000, function(){
            $(".slide_img:first .book:first").appendTo(".slide_img:first");
            $(".slide_img:first").css({marginLeft: 0});
        });
    }

    setInterval(next, 5000);

    function prev(){
        var fullWith = $(".slide_img").width();
        var slideWith = fullWith / 8;

        $(".slide_img:last .book:last").prependTo(".slide_img:last");
        $(".slide_img:last").css({marginLeft: -slideWith});
        $(".slide_img:last").stop().animate({marginLeft: 0}, 1000);
    }

    setInterval(prev, 5000);

});

