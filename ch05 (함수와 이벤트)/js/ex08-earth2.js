let $earth = null; // 전역 변수로 선언함.

$(document).ready(function() {
    initialize();
    eventRun();
});

function initialize() {     // 전역 변수를 초기화함.
    //지구 이미지 찾기
    $earth = $("#earthImg");
}

// 이벤트와 관련된 내용을 함수로 정의함.
function eventRun() {
    // 버튼에 이벤트 등록하기
    $("#startBtn").click(function() {
        // 지구 움직이기
        // 지구 위치 값 구하기
        let x = parseInt($("#xValue").val());
        let y = parseInt($("#yValue").val());
        moveEarth(x, y);
    });
}

// 주어진 값에 맞게 지구 이미지를 이동하는 함수.
function moveEarth(x, y) {
    if((x >= 0) && (x <= 500) && (y >= 0) && (y <= 300)) {
        $earth.animate({
            left: x,
            top: y
            }, 1000);
    } else {
        alert("입력된 값이 범위를 벗어났습니다.");
    }
}


