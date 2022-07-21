
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

    $("#cost").append(
        $("<span>").text("정가"),
        $("<span>").text(data.documents[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원")
    );

    $("#sale").append(
        $("<span>").text("할인가"),
        $("<span>").text(data.documents[0].sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"),
        $("<span>").text("10% 할인")
    );

    $("#book_content").prepend(
        $("<p>").text(data.documents[0].contents)
    )

    var num = data.documents[0].sale_price;
    var total = Number(num);

    $("#purchase_number").append(
        $("<span>").text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원")
    )

   $("#minus").click(function(){
        if($("#number").val() < 2){
            alert("최소 1개 이상 구매 가능합니다.");
            $("#number").val(2);
        }

        $("#number").val(
            parseInt($("#number").val() )- 1
        )

        $("#purchase_number span").text(
            (total * $("#number").val()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"
        )
   })
    
   $("#plus").click(function(){
        $("#number").val(
            parseInt($("#number").val()) + 1
        )

        $("#purchase_number span").text(

            (total * $("#number").val()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"
        )

   })
});



//others slide

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "소비단식 일기" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    var str = data.documents[0].title;
    var str2 = str.substring(0, 7);

    $(".product").eq(0).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(str2),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    );

});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "가장 좋은 것을 너에게 줄게" },
    headers: {Authorization: "KakaoAK b0addad5ec36f2b967b77b1293ed7c5b"}
}).done(function(data){

    $(".product").eq(1).prepend(
        $("<img>").attr("src", data.documents[0].thumbnail),
        $("<h3>").text(data.documents[0].title),
        $("<p>").text(data.documents[0].authors + " / " + data.documents[0].publisher)
    );

});
