// let ab = parseInt(prompt('longueur du coté AB en cm'));
// console.log(ab)
// let abcarre = Math.pow(ab,2);
// console.log(abcarre)
// let bc = parseInt(prompt('longueur du coté BC en cm'));
// console.log(bc)
// let bccarre = Math.pow(bc,2);
// console.log(bccarre)
// let resultat = Math.sqrt(abcarre+bccarre);
// console.log(resultat);
// alert("L'hypoténuse AC mesure " + Math.round(resultat*100)/100 + " cm");

let ab = parseInt(prompt('longueur du coté AB en cm'));
let bc = parseInt(prompt('longueur du coté BC en cm'));
alert("L'hypoténuse AC mesure " + Math.round(Math.sqrt(Math.pow(ab,2)+Math.pow(bc,2))*100)/100 + " cm");