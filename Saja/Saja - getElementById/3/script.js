   
    function calcul () {
        var premierCote = parseInt(document.getElementById('premierCote').value);
        var deuxiemeCote = parseInt(document.getElementById('deuxiemeCote').value);
        var adddd = Math.floor(Math.sqrt(premierCote) + Math.sqrt(deuxiemeCote));
        var troisiemeCote = parseInt(Math.sqrt(adddd));
        var resultat = document.getElementById('resultat');

        if (premierCote && deuxiemeCote) {
            resultat.innerHTML = 
            `<p> Longueur du premier côté est : <span class="red">${premierCote}</span></p> <br/>
             <p> Longueur du deuxiem côté est : <span class="red">${deuxiemeCote}</span></p> <br/>
             <h3> Longueur du troisème côté est : <span class="red">${troisiemeCote} </span></h3>`
        } else {
            alert("Entrer un nombre s'il vous plaît");
        }
    }
