$(function(){

    //nav slide   
    $("header").slideDown();


    //slide button click effect
    $("#new_book button").click(function(){
       var newbook = $("#newBook").offset().top;

       $("html, body").animate({scrollTop: newbook - 50}, 400);
    })

    $("#best_seller button").click(function(){
        var bestseller = $("#bestSeller").offset().top;

        $("html, body").animate({scrollTop: bestseller - 50}, 400);
    })

    $("#recommendation button").click(function(){
        var recommend = $("#recommend").offset().top;

        $("html, body").animate({scrollTop: recommend - 50}, 400);
    })

     
    //신간 도서 slide
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


    //추천 도서 fade
    $("#recommend_content span").click(function(){

        $("#recommend_content span").removeClass("bgColor");
        $(this).addClass("bgColor");

        var spanIndex = $(this).index();

        if(spanIndex == 0){
            $(".fadeBox").eq(spanIndex).fadeIn().css("display", "flex");
            $(".fadeBox").eq(spanIndex).siblings().fadeOut();
        } else if(spanIndex == 1){
            $(".fadeBox").eq(spanIndex).fadeIn().css("display", "flex");
            $(".fadeBox").eq(spanIndex).siblings().fadeOut();
        } else if(spanIndex == 2){
            $(".fadeBox").eq(spanIndex).fadeIn().css("display", "flex");
            $(".fadeBox").eq(spanIndex).siblings().fadeOut();
        }
    });

});