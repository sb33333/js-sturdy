function calc() {
    var currentYear = new Date().getFullYear();
    
    console.log(currentYear);
    var birthYear = prompt("태어난 연도를 입력하세요.", "YYYY"); //YYYY 프롬프트 창에 나타나는 초기 값
    
    var age = 0;
    age = currentYear - birthYear + 1;

    // document는 현재 웹브라우저의 페이지
    // quertSelector()는 id가 result인 웹 요소 (div) 를 의미한다.
    // innerHTML은 대입한 값으로 대체하는 것임.

    // document.querySelector("#result").innerHTML = "당신의 나이는" + age + "세 입니다."; 
    document.getElementById("result").innerHTML = "당신의 나이는" + age + "세 입니다.";
}
