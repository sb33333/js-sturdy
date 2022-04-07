let isOpen = false;
let view = document.getElementById("view");
view.addEventListener("click", function() {
    // 상세 정보가 감춰저 있다면
    if (isOpen === false) {
        // #detail을 보이도록 바꾼다.
        document.getElementById("detail").style.display = "block";
        // <a>의 내용 변경
        view.innerHTML = "상세 설명 닫기";
        isOpen = true;
    } else {
        document.getElementById("detail").style.display = "none";
        view.innerHTML = "상세 설명 보기";
        isOpen = false;
    }
});