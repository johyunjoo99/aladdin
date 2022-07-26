$(function(){

    //댓글 구현
    var reviewInput = document.getElementById("comment");
    var submitBtn = document.getElementById("submitBtn");
    var reviewBox = document.getElementById("reviews_box");

    function submit(){
        // 태그 생성
        const review = document.createElement("div");

        const starScore = document.createElement("div");
        const img1 = document.createElement("img");
        const img2 = document.createElement("img");
        const img3 = document.createElement("img");
        const img4 = document.createElement("img");
        const img5 = document.createElement("img");

        const reviewText = document.createElement("div");
        const comment = document.createElement("p");

        const netizen = document.createElement("div");
        const netizenInfo = document.createElement("div");
        const writeId = document.createElement("span");
        const writeDay = document.createElement("span");
        const like = document.createElement("span");

        const thumb = document.createElement("div");
        const icon1 = document.createElement("i");
        const icon2 = document.createElement("i");


        // 태그에 클래스 이름 넣기
        review.classList.add("review");
        starScore.classList.add("starScore");
        reviewText.classList.add("reviewText");

        netizen.classList.add("netizen");
        netizenInfo.classList.add("netizenInfo");
        writeId.classList.add("writeId");
        writeDay.classList.add("writeDay");
        like.classList.add("like");

        thumb.classList.add("thumb");
        icon1.setAttribute("class", "fa-regular fa-thumbs-up");
        icon2.setAttribute("class", "fa-solid fa-thumbs-up");


        //별점 가져오기
        const blank = document.getElementsByClassName("blank")[0];
        img1.setAttribute("src", blank.childNodes[1].src);
        img2.setAttribute("src", blank.childNodes[3].src);
        img3.setAttribute("src", blank.childNodes[5].src);
        img4.setAttribute("src", blank.childNodes[7].src);
        img5.setAttribute("src", blank.childNodes[9].src);


        //댓글 내용
        comment.innerText = reviewInput.value;
        writeId.innerHTML = "id***6";
        like.innerText = "공감(0)"


        //작성 날짜 가져오기
        var today = new Date();

        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2);
        var day = ('0' + today.getDate()).slice(-2);
        
        var dateString = year + '-' + month  + '-' + day;

        writeDay.innerText = dateString;


        //부모 자식 태그 연결
        review.appendChild(starScore);
        review.appendChild(reviewText);

        reviewText.appendChild(comment);
        reviewText.appendChild(netizen);

        starScore.appendChild(img1);
        starScore.appendChild(img2);
        starScore.appendChild(img3);
        starScore.appendChild(img4);
        starScore.appendChild(img5);

        netizen.appendChild(netizenInfo);
        netizen.appendChild(thumb);

        netizenInfo.appendChild(writeId);
        netizenInfo.appendChild(writeDay);
        netizenInfo.appendChild(like);

        thumb.appendChild(icon1);
        thumb.appendChild(icon2);

       reviewBox.prepend(review);

        //선택한 별점 사진 가져오기
    }

    function register(){
        submit();
        reviewInput.value = "";
    }

    submitBtn.onclick = function(){
        register();
    }







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
    $(".review_star .fa-chevron-down").click(function(){
        $(".review_star .textbox").toggle();
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

    $(document).on("click", ".thumb .fa-regular",function(){
        $(this).css("display", "none");
        $(this).siblings().css("display", "block");

        $(this).parents(".netizen").find(".like").text(
            "공감(" + (count+1) + ")"
        )
    });

    $(document).on("click", ".thumb .fa-solid",function(){
        $(this).css("display", "none");
        $(this).siblings().css("display", "block");

        $(this).parents(".netizen").find(".like").text(
            "공감(" + (count) + ")"
        )
    });


})



