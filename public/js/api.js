$(document).ready(function(){

$("#adresseC").keyup(function () {
    // quand je relache une touche du clavier
    let code = $("#adresseC");
    // je recupere la valeur du champ de saisie
    $("#search").empty();
    // j'efface le contenu à chaque fois pour eviter l'accumulation des li
    fetch("https://api-adresse.data.gouv.fr/search/?q=" + code.val())
    // api = adresse url = recupere des données
        .then(function (response) {
            // transforme ses données en json = js + objet
                return response.json();
            }
        )
        .then(function (json) {
            // je suis le chemin pt par pt pour récuperer la donnée que je veux
            json.features.forEach(function (feature) {
                // pour chaque adresse je crée un li
                    let label = document.createElement("li");
                    // j'implante mes adresses dans mes li
                    label.innerText = feature.properties.label;   
                    // les li sont implanté dans mon ul    
                    
                    $(label).on("click" ,function () {                      
                    // au click sur un li il apparait dans le champ                   
                        code.val(label.textContent);    
                    });

                    $("body").click(function () {                                      
                            $(label).toggle();    
                        });

                    $("#search").append(label);

                })
        })
})
});

