var body=document.querySelector("body");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var h3=document.querySelector("h3");
var random=document.querySelector("button");
function changeBG(){
    body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
    h3.textContent=body.style.background+";";
}
changeBG();
color1.addEventListener("input",changeBG);
color2.addEventListener("input",changeBG);
random.addEventListener("click",function(){
    var randomColor1 ="#"+ Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 ="#"+ Math.floor(Math.random()*16777215).toString(16);
    color1.value=randomColor1;
    color2.value=randomColor2;
    changeBG();
})