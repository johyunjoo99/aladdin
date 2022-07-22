$(function(){

    // 책 소개글 텍스트 삽입
    $.get("../txt/book_introduce.txt", function(data){
        $("#bookIntro").html(data);
    })


    // 기본 정보 텍스트 삽입
    $.get("../txt/basics_infomation.txt", function(data){
        $("#basicsInfo").html(data)
    })


    // 배송 / 교환 안내 텍스트 삽입
    $.get("../txt/delivery_infomation.txt", function(data){
        $("#delivery").html(data);
    })

});