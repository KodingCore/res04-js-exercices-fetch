window.addEventListener("DOMContentLoaded", function(){

    let url = "https://jsonplaceholder.typicode.com/users/1"
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(user) {
            url = "https://jsonplaceholder.typicode.com/albums"
            fetch(url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(albums) {
                    albums.forEach(album => {
                        if(album.userId === user.id){
                            console.log(album.title + " pour l'id " + user.id);
                            url = "https://jsonplaceholder.typicode.com/photos";
                        }
                    });
                });
        });
})

/*

## Exercice 4 : 

_Fichiers : `exercice4.html` et `exercice4.js`._

En cherchant dans la documentation de l'API, 
trouvez un moyen d'afficher pour un utilisateur la liste des ses albums,
et pour chaque album la liste des photos de l'album. Une fois que vous avez trouvé, codez la solution :)
*/