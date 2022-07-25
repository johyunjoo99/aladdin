$(function(){

    $("header").css("display", "block");

    $("#btn_zip button").click(function(){
        alert("선택하신 제품이 장바구니에 담겼습니다.");  
    })

    $("input[type='submit']").click(function(){

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


    //댓글 별 선택
    $(".reviewStar img").click(function(){ 
        $(this).attr("src", "img/purchase_img/star.svg");
        $(this).prevAll().attr("src", "img/purchase_img/star.svg");
        $(this).nextAll().attr("src", "img/purchase_img/star_blank.svg");
    })

    // $(".reviewStar img").bind({

    //     mouseenter: function(){
    //         $(this).attr("src", "img/purchase_img/star.svg");
    //         $(this).prevAll().attr("src", "img/purchase_img/star.svg");
    //     },

    //     mouseleave: function(){
    //         $(this).attr("src", "img/purchase_img/star_blank.svg");
    //         $(this).prevAll().attr("src", "img/purchase_img/star_blank.svg");
    //     }

    // })


})