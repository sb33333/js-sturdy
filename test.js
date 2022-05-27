document.write("hello. this is test.js file");

var number = 20;

var add = function(i, j) {
    return i + j;
}

document.write("</br> add: " + add(number, 30));

var numberArray = [10, 20, 30];

document.write("</br>");
document.write(numberArray);

var mySelf = {
    name : "sanghyeok",
    age : 33,
    calc : add

};

document.write("</br>")
document.write(mySelf.calc(mySelf.age, number));

var property;
for (property in mySelf) {
    document.write("</br>"  +  property +"&nbsp;"+ mySelf[property]);

}