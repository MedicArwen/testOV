var x = 10;
var y = 5;
/* attend le chargement de la */
window.onload = () => {
    /** p1 = element p avec id p1 */
    const p1 = document.getElementById('p1');

if (x > y) {
    /**insert une chaine de caractère dans l'élément*/
    p1.innerHTML = `${x} is greater than ${y}`;
}else {
    p1.innerHTML = `${x} is less than ${y}`;
}

const element = document.getElementById('puissances');

let result = [];

//permet de parcourir un tableau
for (let index = 0; index <= 16; index++) {
    result.push(Math.pow(2, index));
}
//permet de "boucler" sur les éléments d'un tableau
result.map(x => {
    element.innerHTML += `${x}<br>`
})}

/**
 * fonction qui retourne theorem de pythagore
 */
const pythagore = (a, b) => {
    return Math.sqrt(a * a + b * b);
}
console.log(pythagore(3, 4));
/**CODE DE GREG */