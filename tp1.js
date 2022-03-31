let age = 32;
age = age +10;
// age +=10;
console.log(age);
const prenom = "Milos";
alert("dans dix ans "+prenom+" aura "+age);
console.log(`C'est dans 10 ans que ${prenom} aura ${age}`);


function entier (nombre){
    let resultat = Math.floor(nombre);
    return resultat
}
let resultatEntier = entier(5.36);
console.log(resultatEntier);