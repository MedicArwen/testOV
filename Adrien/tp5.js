// Boucle for
for (i=Math.pow(2,1); i<= Math.pow(2,16); i+=i){
    console.log(i)
    document.write(i + "<br />");
}

// Boucle while
let n = 1;
while (n < Math.pow(2,16)){
    n+=n;
    console.log(n);
    document.write(n + "<br />");
}
