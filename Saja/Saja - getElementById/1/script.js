function resultat() {
    var x = 5;
    var y = 10;

    if (x > y) {
        document.getElementById('p1').innerHTML = "<p>x est plus grand que y</p>";
    } else {
        document.getElementById('p1').innerHTML = "<p>x est plus petit que y</p>";
    }

}
// cas 2 (inversement des chiffres)
function ifInverse() {
    var x = 10;
    var y = 5;

    if (x > y) {
        document.getElementById('p1').innerHTML = "<p>x est plus grand que y</p>";
        
    } else if (x <= y ) {
        document.getElementById('p1').innerHTML = "<p>x est plus petit que y</p>";
    }

}
