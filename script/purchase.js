$(function(){

    //세일즈 포인트 소개
    $("#score .fa-chevron-down").click(function(){
        $("#score .textbox").toggle();
    });


    //구매 완료
    $("header").css("display", "block");

    $("#btn_zip button").click(function(){
        alert("선택하신 제품이 장바구니에 담겼습니다.");  
    })

    $("#btn_zip input").click(function(){

        alert("구매가 완료되었습니다.");

    });



    //다른 제품 slide
    var fullWidth = $("#slide").width();
    var slideWidth = fullWidth / 3
    var index = 0;

    $(".fa-circle-chevron-left").click(function () {
        
        index--;

        if(index < 0){
            
            index = 2;
            
            $("#slide").stop().animate({marginLeft: 0});

        }

        $("#slide").stop().animate({ marginLeft: -slideWidth * index });
        $("#page_btn span").removeClass("on");
        $("#page_btn span").eq(index).addClass("on");
               
        console.log(index); 
    });

    $(".fa-circle-chevron-right").click(function(){

        index++;

        if(index > 2){

            index = 0;
        }

        $("#slide").stop().animate({marginLeft: -slideWidth * index});
        $("#page_btn span").removeClass("on");
        $("#page_btn span").eq(index).addClass("on");

        console.log(index);
    });

    $("#page_btn span").click(function(){

        $("#page_btn span").removeClass("on");
        $(this).addClass("on");

        index = $(this).index();
        $("#slide").animate({marginLeft: -slideWidth * index});

    })



    //책 정보 메뉴 fade
    $(".infoMenu").click(function(){

        $(".infoMenu").removeClass("active");
        $(this).addClass("active");

        var menuIndex = $(this).index();

        $(".bookInfo").eq(menuIndex).fadeIn().siblings().fadeOut("fast");

        var boxHeight = $(".bookInfo").eq(menuIndex).height();

        $("#bookInfo_box").css({height: boxHeight});

    });



    //구매자 & 평점 분포 그래프
    $(window).scroll(function(){

        var ws = $(this).scrollTop();

        var distribution = $("#distribution").offset().top;

        if(ws > distribution - 500){
            $(".graph, .graphs").css("transform", "scaleX(1)")
        }

    });



    //글 작성 유의사항
    $(".review .fa-chevron-down").click(function(){
        $(".review .textbox").toggle();
    });



    //댓글 별 선택
    $(".blank img").click(function(){
        $(this).attr("src", "img/purchase_img/star.svg");
        $(this).prevAll().attr("src", "img/purchase_img/star.svg");
        $(this).nextAll().attr("src", "img/purchase_img/star_blank.svg");
    })

    $(".blank img").hover(function(){

        var starIndex = $(this).index();

        $(".fill img").eq(starIndex).css("opacity", 1);
        $(".fill img").eq(starIndex).prevAll().css("opacity", 1);
        $(".fill img").eq(starIndex).nextAll().css("opacity", 0);

    }, function(){
        var starIndex = $(this).index();

        $(".fill img").eq(starIndex).css("opacity", 0);
        $(".fill img").eq(starIndex).prevAll().css("opacity", 0);
        $(".fill img").eq(starIndex).nextAll().css("opacity", 0);
    });



    //댓글 좋아요
    var count = 0

    $(".thumb .fa-regular").click(function(){
        $(this).css("display", "none");
        $(this).siblings().css("display", "block");

        $(this).parents(".netizen").find(".like").text(
            "공감(" + (count+1) + ")"
        )
    });

    $(".thumb .fa-solid").click(function(){
        $(this).css("display", "none");
        $(this).siblings().css("display", "block");

        $(this).parents(".netizen").find(".like").text(
            "공감(" + (count) + ")"
        )
    });

})
