let mRect = document.getElementById("rect");

//mouseover이벤트 처리
mRect.addEventListener("mouseover", function() {
    mRect.style.backgroundColor = "green";
    mRect.style.borderRadius = "50%";
});

mRect.addEventListener("mouseout", function() {
    mRect.style.backgroundColor = "";
    mRect.style.borderRadius = "0%";
});