function xy() {
let x = Number(parseInt(document.getElementById('x').value));
let y = Number(parseInt(document.getElementById('y').value));
let message = document.getElementById("p1");
if(x > y) {
  message.innerHTML=(x+' est plus grand que '+y);
} else if (y > x) {
   message.innerHTML=(y+' est plus grand que '+x)
}
}
