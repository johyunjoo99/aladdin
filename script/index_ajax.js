
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
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "원펀맨" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $("#medal .best").eq(0).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

//베스트 셀러
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "믿음에 대하여" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){
    
    var str = data.documents[0].title;
    var str2 = str.substring(0, 7);

    $(".medal:first .best").eq(0).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "원펀맨" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".medal:first .best").eq(1).append(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    )
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "파친코 1" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".medal:first .best").eq(2).append(
        $("<img>").attr("src", data.documents[1].thumbnail),
        $("<h3>").text(data.documents[1].title),
        $("<p>").text(data.documents[1].authors + " / " + data.documents[1].publisher)
    )
    
});