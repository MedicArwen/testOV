let x = 10;
let y = 5;

let message = document.getElementById("p1");

if(x > y)
{
    console.log(message);
    message.innerHTML=(`${x} est plus grand que ${y}`); 
}
else if(x <= y)
{
   message.innerHTML=(`${x} est plus petit que ${y}`);
}