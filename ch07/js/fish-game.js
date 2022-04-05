// 전역 변수 선언과 초기화
let cnt = 0;
let $score = null;
let $fish = null;
let play = false;
let timerId = 0;

$(document).ready(function() {
    //요소를 초기화 한다.
    init();
    // 이벤트를 등록한다.
    initEvent();
});

function init() {
    // 전역에서 사용할 요소 바인딩.
    $score = $("#score");
    $fish = $("#fish");
}

//이벤트 등록하기
function initEvent() {
    // 게임 시작 버튼을 누르면 시작함.
    // $("#startBtn").click(function() {
    //     startGame();
    // });
    
    $("#startBtn").click(startGame);
    // 클릭 이벤트로 실행할 함수가 1개라면 바로 함수를 넣으면 안될까?
    // -> 이렇게 해도 됨.

    // 물고기를 클릭하면 점수를 얻음.
    $fish.click(function() {
        addScore();
    });
}

function startGame() {
    // 플래그 변수를 검사해서 false 일 때 게임을 시작하도록 만든다.
    if (play === false) {
        // 게임이 종료되었는지 체크
        checkEndGame();
        play = true;
        $score.html(cnt);
        timerId = setInterval(function() {
            // 물고기를 움직이는 함수 호출
            moveFish();
        }, 1000);
    }
}

function addScore() {
    if(play === true) {
        cnt++;
        $score.html(cnt);
    }
}

// 물고기를 움직이는 함수 구현
function moveFish() {
    //물고기 이미지 크기 120px * 70px
    //패널의 크기 600px * 400px
    //물고기의 x축 이동 영역: 0 ~ 480 (600 - 120)
    //물고기의 y축 이동 영역: 0 ~ 330 (400 - 70)
    let x = parseInt(Math.random() * 480);
    let y = parseInt(Math.random() * 330);

    $fish.animate({
        left: x,
        top: y
    }, 500);
}

function checkEndGame() {
    // 게임이 5초 뒤에 종료 되도록 한다.
    setTimeout(function() {
        play = false;
        // 물고기를 움직이도록 하는 반복 타이머를 종료한다.
        clearInterval(timerId);
        alert("게임 종료");
        cnt = 0;
    }, 5000);
}