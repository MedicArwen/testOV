let variable = 10;
if (variable <0)
{
    //liste des instructions si conditions vérifiée
    console.log(`le nombre${variable} est négatif`)
}
//La suite est bonne grâce a ==
else
{
    console.log(`le nombre${variable} est positif`)
}
if (variable ==10)
{
    console.log(`sa vaut bien dix${variable}`)
}
//La suite est fausse a cause de =
else 
{
    console.log(`sa vaut bien dix${variable}`)
}
if (variable =10)
{
    console.log(`sa vaut bien dix${variable}`)
}
//Stop du code qui est faux
for(let i=0;0<10;i++)
    {
        console.log(i);
    }
console.log(i);
//Var = portée globale
for(var i=0;i<10;i++)
    {
        console.log(i);
    }
console.log(i);
//Boucle ATTENTION elle continu de charger en infini
let p = 0;
while (p<10)
{
        console.log("p="+p);
        p=p+1;
}
//p =0;
do
{
        console.log("p="+p);
        p+=1;
}
while (p<10)

switch (p)
{
    case 0: console.log("zero");
        break;
    case 1: console.log("un");
        break;
    default: console.log("ca me fatigue voici le nombre"+p);
}