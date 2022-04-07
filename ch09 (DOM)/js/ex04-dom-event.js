let pic = document.getElementById("pic");
//addEventListener
// id선택자인 pic에게 마우스가 올라가면 changePic()을 호출하고
// false -> 버블링을 하지 않겠다.
// 버블링 -> 이벤트가 하위 요소에서 발생하면 이게 상위 요소까지 전파되는 형태.
// 하나의 선택자에 다중으로 이벤트를 등록할 수 있다.
pic.addEventListener("mouseover", changePic, false);
pic.addEventListener("mouseout", rollbackPic, false);

// function changePic() {
//     pic.src = "images/boy.png";
//     //pic1.src = "images/boy.png";
// }    this를 사용해도 되는데 전역변수를 사용하는 이유는 무엇일까?

function changePic() {
    console.dir(changePic);
    console.log(this);
    this.src = "./resources/boy.png";
}

function rollbackPic() {
    this.src = "./resources/girl.png";
}


//getElementById() : id선택자가 있는 웹 요소에 접근할때 사용하는 한가지의 방법
//DOM노드 중에서 요소 노드까지만 접근이 가능하다.
//querySelector() : 노드요소 뿐만 아니라 텍스트 노드와 속성 노드까지 접근가능하다.