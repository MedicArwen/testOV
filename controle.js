let variable = 50;
if (variable <0)

{
    // liste des instructions si condition vérifiée
    console.log(`le nombre ${variable} est négatif`);
}
else
{
    // liste des instructions si condition non vérifiée
    console.log(`le nombre ${variable} est positif`);
}

if (variable ==10)
{
    console.log(`ca vaut bien dix:${variable}`);
}
else
    console.log(`ca vaut pas dix:${variable}`);

    // ATTENTIIN LA LIGNE SUIVANTE EST FAUSSE 
if (variable =10)
{
    console.log(`ca vaut bien dix:${variable}`);
}
else
    console.log(`ca vaut pas dix:${variable}`);

for(let i=0;i<10;i++)
    {
        console.log(i);
    }
console.log(i);
// avec var portée GLOBALE
for(var i=0;i<10;i++)
    {
        console.log(i);
    }
console.log(i);
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
    default: console.log("ca me fatigue voici le nombre:"+p);
}