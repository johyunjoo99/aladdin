
//slider 
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "매일을 헤엄치는 법" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $("#book_info").prepend(
        $("<h1>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher),
    )

    $("#book_content").prepend(
        $("<p>").text(data.documents[0].contents)
    )

});