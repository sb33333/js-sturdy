// 상세 설명을 여는 함수.
function showDetail() {
    document.querySelector("#description").style.display = "block";
    document.querySelector("#open").style.display = "none";
}

// 상세 설명을 닫는 함수.
function hideDetail() {
    document.querySelector("#description").style.display = "none";
    document.querySelector("#open").style.display = "block";
}
