window.addEventListener("DOMContentLoaded", function(){

    const bodyNode = document.querySelector("body");

    let url = "https://jsonplaceholder.typicode.com/users/1";

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(user) {
            url = "https://jsonplaceholder.typicode.com/albums";

            fetch(url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(albums) {
                    albums.forEach(album => {
                        if(album.userId === user.id){
                            console.log(album.title + " pour l'id " + user.id);
                            url = "https://jsonplaceholder.typicode.com/photos";

                            fetch(url)
                                .then(function(response){
                                    return response.json();
                                })
                                .then(function(photos){
                                    
                                    photos.forEach(photo => {
                                        console.log(album);
                                        if(photo.albumId === album.id){
                                            const imageNode = document.createElement("img");
                                            imageNode.setAttribute("src", photo.thumbnailUrl);
                                            bodyNode.appendChild(imageNode);
                                        }
                                    });
                                })
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