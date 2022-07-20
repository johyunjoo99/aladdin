
//신간 소개 BOOK
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "표범이 말했다" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){
    
    var str = data.documents[0].title;
    var str2 = str.substring(0, 7);

    $(".book").eq(0).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )

});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "노랜드" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){
    
    var str = data.documents[0].title;
    var str2 = str.substring(0, 3);

    $(".book").eq(1).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "우리셋" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){
    
    $(".book").eq(2).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "계속 가봅시다 남는 게 체력인데" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){
    
    $(".book").eq(3).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "유럽 도시 기행 2" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 8);
    
    $(".book").eq(4).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "역행자" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){
    
    $(".book").eq(5).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "입 속의 검은 잎" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 9);
    
    $(".book").eq(6).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "예비매3비" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(23, 29);
    
    $(".book").eq(7).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});




//눈에 띄는 새 책
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "땀의 과학" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){
    
    $(".book").eq(8).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "이야기의 끝" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){
    
    $(".book").eq(9).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "악스트 2022" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 8);
    
    $(".book").eq(10).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "파친코 1" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[1].title;
    var str2 = str.substring(0, 8);
    
    $(".book").eq(11).append(
        $("<img>").attr("src", data.documents[1].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[1].authors + " / " + data.documents[1].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "이어령의 마지막 수업" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 8);
    
    $(".book").eq(12).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "광개토태왕 담덕" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 10);
    
    $(".book").eq(13).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "미스터리 철학 클럽" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 8);
    
    $(".book").eq(14).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "꽁꽁꽁 아이스크림" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 9);
    
    $(".book").eq(15).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});






//베스트 셀러

// 스테디셀러 순위
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "파친코 1" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".no1").eq(0).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "파친코 2" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".ranking:first .rank").eq(0).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    );

    $(".ranking:first .rankText").eq(0).prepend(
        $("<span>").text(2),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "해커스 토익 기출 보카 TOEIC VOCA" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 23);

    $(".ranking:first .rank").eq(1).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:first .rankText").eq(1).prepend(
        $("<span>").text(3),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "부자 아빠 가난한 아빠 1" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 14);

    $(".ranking:first .rank").eq(2).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )
    
    $(".ranking:first .rankText").eq(2).prepend(
        $("<span>").text(4),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );

});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "돈, 뜨겁게 사랑하고 차갑게 다루어라" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 20);

    $(".ranking:first .rank").eq(3).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:first .rankText").eq(3).prepend(
        $("<span>").text(5),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "돈의 심리학" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 6);

    $(".ranking:first .rank").eq(4).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:first .rankText").eq(4).prepend(
        $("<span>").text(6),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "오은영의 화해" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 7);

    $(".ranking:first .rank").eq(5).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:first .rankText").eq(5).prepend(
        $("<span>").text(7),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );

});










//지금 베스트
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "파친코 1" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".no1").eq(1).prepend(
        $("<img>").attr("src", data.documents[1].thumbnail),
        $("<h3>").text(data.documents[1].title),
        $("<p>").text(data.documents[1].authors + " / " + data.documents[1].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "원펀맨" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".ranking:nth-of-type(2) .rank").eq(0).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )
    
    $(".ranking:nth-of-type(2) .rankText").eq(0).prepend(
        $("<span>").text(2),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );

});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "믿음에 대하여" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 7);

    $(".ranking:nth-of-type(2) .rank").eq(1).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )
    
    $(".ranking:nth-of-type(2) .rankText").eq(1).prepend(
        $("<span>").text(3),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );

});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "파친코 1" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".ranking:nth-of-type(2) .rank").eq(2).prepend(
        $("<img>").attr("src", data.documents[1].thumbnail)
    )

    $(".ranking:nth-of-type(2) .rankText").eq(2).prepend(
        $("<span>").text(4),
        $("<h3>").text(data.documents[1].title),
        $("<p>").text(data.documents[1].authors),
        $("<p>").text(data.documents[1].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "뿌미맘 가계부" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 7);

    $(".ranking:nth-of-type(2) .rank").eq(3).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:nth-of-type(2) .rankText").eq(3).prepend(
        $("<span>").text(5),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불편한 편의점" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 7);

    $(".ranking:nth-of-type(2) .rank").eq(4).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    );

    $(".ranking:nth-of-type(2) .rankText").eq(4).prepend(
        $("<span>").text(6),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "매일 헤엄치는 법" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".ranking:nth-of-type(2) .rank").eq(5).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )
    
    $(".ranking:nth-of-type(2) .rankText").eq(5).prepend(
        $("<span>").text(7),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );

});





//주간 베스트
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "파친코 1" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".no1").eq(2).prepend(
        $("<img>").attr("src", data.documents[1].thumbnail),
        $("<h3>").text(data.documents[1].title),
        $("<p>").text(data.documents[1].authors + " / " + data.documents[1].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "유럽 도시 기행 2" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 8);

    $(".ranking:nth-of-type(3) .rank").eq(0).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:nth-of-type(3) .rankText").eq(0).prepend(
        $("<span>").text(2),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "역행자" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".ranking:nth-of-type(3) .rank").eq(1).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:nth-of-type(3) .rankText").eq(1).prepend(
        $("<span>").text(3),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "믿음에 대하여" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 7);

    $(".ranking:nth-of-type(3) .rank").eq(2).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:nth-of-type(3) .rankText").eq(2).prepend(
        $("<span>").text(4),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "계속 가보겠습니다" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".ranking:nth-of-type(3) .rank").eq(3).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:nth-of-type(3) .rankText").eq(3).prepend(
        $("<span>").text(5),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "마법천자문" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 8);

    $(".ranking:nth-of-type(3) .rank").eq(4).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:nth-of-type(3) .rankText").eq(4).prepend(
        $("<span>").text(6),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불편한 편의점" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 7);

    $(".ranking:nth-of-type(3) .rank").eq(5).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:nth-of-type(3) .rankText").eq(5).prepend(
        $("<span>").text(7),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});





//신간 베스트
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "믿음에 대하여" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 7);

    $(".no1").eq(3).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "계속 가보겠습니다" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".ranking:last .rank").eq(0).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:last .rankText").eq(0).prepend(
        $("<span>").text(2),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "뿌미맘 가계부" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 7);

    $(".ranking:last .rank").eq(1).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:last .rankText").eq(1).prepend(
        $("<span>").text(3),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "원펀맨" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".ranking:last .rank").eq(2).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:last .rankText").eq(2).prepend(
        $("<span>").text(4),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "주문은 토끼입니까?" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".ranking:last .rank").eq(3).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:last .rankText").eq(3).prepend(
        $("<span>").text(5),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "튜브" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".ranking:last .rank").eq(4).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:last .rankText").eq(4).prepend(
        $("<span>").text(6),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "사이다의 핸드메이드 드레스 레슨" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".ranking:last .rank").eq(5).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".ranking:last .rankText").eq(5).prepend(
        $("<span>").text(7),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});








//추천 도서
//독자의 추천
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "에세 1" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:first .content").eq(0).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 4);

    $(".fadeBox:first .contentText").eq(0).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "책 chaeg" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:first .content").eq(1).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 21);

    $(".fadeBox:first .contentText").eq(1).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "세피아빛 초상" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:first .content").eq(2).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 7);

    $(".fadeBox:first .contentText").eq(2).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "유럽도시기행 2" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:first .content").eq(3).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 10);

    $(".fadeBox:first .contentText").eq(3).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "죽음의 병" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:first .content").eq(4).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 5);

    $(".fadeBox:first .contentText").eq(4).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "르몽드" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:first .content").eq(5).prepend(
        $("<img>").attr("src", data.documents[1].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 4);

    $(".fadeBox:first .contentText").eq(5).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[1].authors),
        $("<p>").text(data.documents[1].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "사랑은 왜 아픈가" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:first .content").eq(6).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".fadeBox:first .contentText").eq(6).prepend(
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "링컨 하이웨이" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:first .content").eq(7).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 7)

    $(".fadeBox:first .contentText").eq(7).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});






//전문기관의 추천
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "오십, 나는 이제 다르게 읽는다" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:nth-of-type(2) .content").eq(0).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 17);

    $(".fadeBox:nth-of-type(2) .contentText").eq(0).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "책 잘 읽는 아이의 독서법" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:nth-of-type(2) .content").eq(1).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".fadeBox:nth-of-type(2) .contentText").eq(1).prepend(
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "미국 주식 투자 습관" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:nth-of-type(2) .content").eq(2).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".fadeBox:nth-of-type(2) .contentText").eq(2).prepend(
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "함께 자라기" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:nth-of-type(2) .content").eq(3).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".fadeBox:nth-of-type(2) .contentText").eq(3).prepend(
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "관계를 읽는 시간" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:nth-of-type(2) .content").eq(4).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".fadeBox:nth-of-type(2) .contentText").eq(4).prepend(
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "자기 인생의 철학자들" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:nth-of-type(2) .content").eq(5).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 16);

    $(".fadeBox:nth-of-type(2) .contentText").eq(5).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "아픔이 길이 되려면" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:nth-of-type(2) .content").eq(6).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 10);

    $(".fadeBox:nth-of-type(2) .contentText").eq(6).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "코스모스" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:nth-of-type(2) .content").eq(7).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 10);

    $(".fadeBox:nth-of-type(2) .contentText").eq(7).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});





//미디어의 추천
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "시의 역사" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:last .content").eq(0).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 5);

    $(".fadeBox:last .contentText").eq(0).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "카지노 베이비" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:last .content").eq(1).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".fadeBox:last .contentText").eq(1).prepend(
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "잠자는 죽음을 깨워 길을 물었다" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:last .content").eq(2).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".fadeBox:last .contentText").eq(2).prepend(
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "만약 고교야구 여자 매니저가 피터 드러커를 읽는다면" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:last .content").eq(3).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 27);

    $(".fadeBox:last .contentText").eq(3).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "BTS 예술혁명" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:last .content").eq(4).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".fadeBox:last .contentText").eq(4).prepend(
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "영화로 전선을 간다" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:last .content").eq(5).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".fadeBox:last .contentText").eq(5).prepend(
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "꿀벌의 노래" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:last .content").eq(6).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    var str = data.documents[0].title;
    var str2 = str.substring(0, 21);

    $(".fadeBox:last .contentText").eq(6).prepend(
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "철수 삼촌" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".fadeBox:last .content").eq(7).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail)
    )

    $(".fadeBox:last .contentText").eq(7).prepend(
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors),
        $("<p>").text(data.documents[0].publisher)
    );
    
});
