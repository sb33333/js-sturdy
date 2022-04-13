//전역 변수 선언과 초기화
let $view = null;
let currentIndex = 1;
let timerId = 0;

//시작 부분
window.onload = function() {
    init(); // 전역 변수 초기화
    initEvent(); // 이벤트 초기화 함수 등록
}

function init() {
    // img#view DOM 객체를 찾는다
    $view = $("#view");
}

// Event초기화 함수
function initEvent() {
    $("#play").click(function() {
        startAutoPlay();
    });
    $("#stop").click(function() {
        clearInterval(timerId);
        timerId = 0;
    });
    $("#prev").click(function() {
        loadPrevImage();
    });
    $("#next").click(function() {
        loadNextImage();
    });
}

// 재생 실행 함수
function startAutoPlay() {
    // 1ms 마다 nextImage() 함수를 호출한다.
    if(timerId == 0) {
        timerId = setInterval(function() {
            nextImage();
        },10);
    }
}

function nextImage() {
    currentIndex += 1;
    // 이미지 갯수에 맞게 설정
    if (currentIndex > 60) {
        currentIndex = 1;
    }
    showImage(currentIndex);
}
// 보여줄 이미지를 설정하는 함수
function showImage(index) {
    $view.attr("src", "./resources/" + index + ".jpg");
    console.log("image no.: " + index);
}

// 이전 이미지를 찾는 함수
function loadPrevImage() {
    currentIndex -= 1;
    if (currentIndex < 1) {
        currentIndex = 60;
    }
    showImage(currentIndex);
}

// 다음 이미지를 찾는 함수
function loadNextImage() {
    currentIndex += 1;
    if (currentIndex > 60) {
        currentIndex = 1;
    }
    showImage(currentIndex);
}