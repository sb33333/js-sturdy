$(document).ready(function() {
    let $images = null;     // 전역 변수 등록
    init();
    initEvent();
})

function init() {
    $images = $("#container1 img");     //배열로 이미지들을 변수에 저장함.
}

function initEvent() {
    $("#startBtn").click(function() {
        showImage();
    });
}

function showImage() {
    // 이미지의 갯수 구하기
    let imgCount = $images.length;
    // 이미지 나열하기
    for (let i = 0; i < imgCount; i++) {
        // eq() 함수를 이용하여 인덱스에 맞는 이미지를 변수에 저장한다.
        let $img = $images.eq(i);

        // 위치 값 구하기
        let x = 100 + ((i % 3) * 200);
        let y = 100 + (parseInt(i / 3) * 200);

        // 이미지의 위치를 설정한다.
        $img.animate({
            left: x,
            top: y
        });
    }
}
