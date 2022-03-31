(function () {
    var cinquante = 50;
    var trois = 3;
    var resultat = Math.floor(cinquante / trois) ;
    var reste = cinquante % trois;

    document.querySelector('h1').innerHTML= 
        `<h1>
        le résultat de la division de 50 sur 3 est : <span style="color:red">${resultat}</span>, 
        <br/> 
        et le reste est <span style="color:red">${reste}</span>
        </h1>`;

})();