(function () {
    
    // 1
    for (i = 1; i <= 16; i++) {
        console.log(Math.pow(2,i));
    }

    // 2
    let x = 0 ;
    while (x < 16) {
        x++;
        console.log(`en utilisant while : ${Math.pow(2, x)}`);
    }
    
})();