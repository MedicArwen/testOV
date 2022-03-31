let x = 5;
let y = 10;

let message = document.getElementById("p1");

if(x > y){
    message.innerHTML=(`${x} est plus grand que ${y}`);
    message.style.color = "red"
}
else if(x<=y){
    message.innerHTML=(`${x} est plus petit que ${y}`);
    message.style.color ="green"
}