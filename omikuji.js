var name;
var result;

name = prompt("お名前を教えて下さい。");
if(name===""){
    name="名無し";
}
document.getElementById("name").innerHTML = name;

var rand = Math.floor( Math.random() * 20);
if (rand >= 0 && rand < 3){
    result = "大吉";
} else if(rand < 8){
    result = "中吉";
} else if(rand < 13) {
    result = "小吉";
} else if(rand < 18){
    result = "吉";
} else if(rand < 20){
    result = "凶"
}
document.getElementById("result").innerHTML = result;
console.log(rand);