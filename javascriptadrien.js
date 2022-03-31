//Duree = 6700 nombre
let duree = 6700;
//Heure = tronquer(duree /3600 )
let heure = Math.floor(duree/3600);
//Minutes = tronquer ((duree %3600)/60)
let minute = Math.floor((duree %3600) /60);
let seconde = (duree %3600)%60;

console.log(`${duree} secondes donnent ${heure}h${minute}m${seconde}s`)
