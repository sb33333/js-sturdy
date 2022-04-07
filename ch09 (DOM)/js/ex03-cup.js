window.onload = function () {
    let bigPicture = document.getElementById("product-picture").children[0];
    let smallPic = document.getElementsByClassName("small");

    /*
        var bigPic = document.querySelector("#cup"); //큰 이미지 찾아옴
        var smallPic = document.querySelectorAll(".small"); //작은 이미지 찾아옴(노드리스트)
        예제 문장들이 위 주석 아닌 코드와 큰 차이가 없음.
     */
    

    for (let i = 0; i < smallPic.length; i++) {
        // 작은 이미지 노드리스트들을 클릭하면 changePic() 함수가 호출됨.
        // 아래는 이벤트 리스너 등록하는 과정임.
        smallPic[i].addEventListener("click", changePic);
    }            

    function changePic() {
        // click 이벤트가 발생한 대상(this)의 src 속성을 newPic에 저장
        let newPic = this.src           // 여기서 this는 무엇을 가리키는가?
        // 큰 이미지의 src 속성을 newPic으로 바꾼다.
        // bigPicture.src = newPic;     같은 동작
        bigPicture.setAttribute("src", newPic);
    }

}




