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



})