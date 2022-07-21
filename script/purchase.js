$(function(){

    $("header").css("display", "block");


    //다른 제품 slide
    var fullWidth = $("#slide").width();
    var slideWidth = fullWidth / 3
    var page = 0;

    $(".fa-circle-chevron-left").click(function () {
        
        page--;

        $("#slide").stop().animate({ marginLeft: -slideWidth * page });

        if(page < 0){
            
            page = 0;

            $("#slide").stop().animate({marginLeft: 0});

        }

    });

    $(".fa-circle-chevron-right").click(function(){

        page++;

        $("#slide").stop().animate({marginLeft: -slideWidth * page});

        if(page > 1){

            page = -1;
        }

    });

    $("#page_btn span").click(function(){

        $("#page_btn span").removeClass("on");
        $(this).addClass("on");

    })

})