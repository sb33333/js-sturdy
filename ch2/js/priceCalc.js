function showPrice() {
    // 사용자가 입력한 값을 입력받음
    var oPrice = document.querySelector("#originalPrice").value;
    var discountRate = document.querySelector("#discountRatio").value;
    console.log(oPrice);
    console.log(discountRate);
    // oPrice와 discountRate 모두 음수가 아니어야 함.
    if (oPrice > 0 && discountRate > 0) {
        var discountedPrice = oPrice * (discountRate / 100);
        var resultPrice = oPrice - discountedPrice;
    }
    document.querySelector("#showResult").innerHTML = "상품의 원래 가격은" + oPrice + "원이고, 할인율은 " + discountRate + "%입니다. " + discountedPrice + "원을 절약한 " + resultPrice + "원에 살 수 있습니다.";
}