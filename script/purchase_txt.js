$(function(){

    //세일즈 포인트 소개글
    $.get("./txt/sales_point.txt", function(data){
        $("#score .textbox").html(data);

        // 소개글 창 닫기
        $(".textbox .fa-xmark").click(function () {
            $("#score .textbox").css("display", "none");
        });
    })




    // 책 소개글 텍스트 삽입
    $.get("./txt/book_introduce.txt", function(data){
        $("#bookIntro").html(data);
    })


    // 기본 정보 텍스트 삽입
    $.get("./txt/basics_infomation.txt", function(data){
        $("#basicsInfo").html(data)
    })


    // 배송 / 교환 안내 텍스트 삽입
    $.get("./txt/delivery_infomation.txt", function(data){
        $("#delivery").html(data);
    })


    //글 작성 시 유의사항
    $.get("./txt/write_notice.txt", function(data){
        $(".review_star .textbox").html(data);

        // 글 작성 시 유의사항 창 닫기
        $(".review_star .fa-xmark").click(function () {
            $(".review_star .textbox").css("display", "none");
        })
    })

});