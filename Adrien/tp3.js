let nombre1 = 50;
let nombre2 = 3;
let resultat = nombre1 /nombre2;
console.log(resultat);
document.write(resultat + "<br />");
let resultatEntier = Math.floor(resultat);
console.log(resultatEntier);
document.write(resultatEntier);
let reste = resultat - resultatEntier;
console.log(reste);

alert("Le résultat de la division entière de "+nombre1+" par "+nombre2+" est de "+resultatEntier+" et le reste est "+reste);