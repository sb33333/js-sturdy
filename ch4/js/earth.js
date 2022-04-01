$(document).ready(function (){
    //지구 이미지 웹요소를 찾아서 변수에 저장
    let $img = $("#earth");

    // 버튼에 이벤트 등록
    $("#btnStart").on("click", function(){  // 버튼을 클릭하면 call-back함수가 실행된다.
        $img.animate({
            left : "480px"
        }, 5000);  // 5000ms(== 5sec)에 걸쳐 animate 값 적용. (left : 50px -> 480px)
    })
})


/* ready(function () {   -> 여기서 function() 은 call-back 함수이다. 

}) 
*/