function newRegister() {
    
    let userName = document.getElementById("userName");
    
    // 새로운 <p>요소를 만든다
    let newP = document.createElement("p");

    // textNode를 만든다.
    let text = document.createTextNode(userName.value);

    // 만들어진 <p>요소에 textNode 요소를 붙인다.
    newP.appendChild(text);

    // ex08 예제용 삭제 버튼 추가.
    newP.appendChild(makeDelButton());
    

    let nameList = document.getElementById("nameList");
    // <div> 요소에 만들어진 <p>요소를 붙인다.
    // nameList.appendChild(newP);
    // ex08 - p 요소를 #nameList의 맨 앞에 추가한다.
    nameList.insertBefore(newP, nameList.childNodes[0]);

    addRemoveEvent();
    //텍스트 필드 지우기
    userName.value = "";

}

// 삭제 버튼 만들기
function makeDelButton() {
    let delButtonSpan = document.createElement("span");
    delButtonSpan.appendChild(document.createTextNode("X"));
    // 만드는 버튼에 class = "del" 속성을 추가함.
    delButtonSpan.setAttribute("class", "del");
    return delButtonSpan;
}

// 삭제 버튼에 이벤트 핸들러 등록하기
function addRemoveEvent() {
    let removeBtns = document.getElementsByClassName("del");
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener("click", function() {
            // this.parentNode.parentNode -> #nameList를 의미.
            if (this.parentNode.parentNode) {
                // p태그를 삭제함.
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
    
        });
    }
}

