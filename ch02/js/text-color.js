// heading 변수를 선언하고, id 값이 heading인 요소, 여기서는 h1태그를 지정함.
var heading = document.getElementById("heading");
// heading 객체(h1요소)를 클릭하면 지정한 함수가 실행됨.
heading.onclick = function() {
    heading.style.color = "red";
}