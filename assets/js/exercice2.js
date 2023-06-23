window.addEventListener("DOMContentLoaded", function(){
    let url = "https://jsonplaceholder.typicode.com/users/1"

    fetch(url)

        .then(function(response) {
            return response.json();
        })

        .then(function(result) {
            console.log(result);
            const userInfosNode = document.getElementById("users-informations");

            const newUserNameTherme = document.createElement("dt");
            userInfosNode.appendChild(newUserNameTherme);
            newUserNameTherme.textContent = "name";
            const newUserNameDefinition = document.createElement("dd");
            userInfosNode.appendChild(newUserNameDefinition);
            newUserNameDefinition.textContent = result.name;
            const newUserEmailTherme = document.createElement("dt");
            userInfosNode.appendChild(newUserEmailTherme);
            newUserEmailTherme.textContent = "email";
            const newUserEmailDefinition = document.createElement("dd");
            userInfosNode.appendChild(newUserEmailDefinition);
            newUserEmailDefinition.textContent = result.email;
            const newUserWebsiteTherme = document.createElement("dt");
            userInfosNode.appendChild(newUserWebsiteTherme);
            newUserWebsiteTherme.textContent = "website";
            const newUserWebsiteDefinition = document.createElement("dd");
            userInfosNode.appendChild(newUserWebsiteDefinition);
            newUserWebsiteDefinition.textContent = result.website;
            
    });


})

/*

## Exercice 2 : Récupérer un utilisateur et ses posts

_Fichiers : `exercice2.html` et `exercice2.js`._

Vous allez devoir afficher les informations d'un utilisateur ainsi que la liste de ses publications.

L'URL pour les infos d'un utilisateur : https://jsonplaceholder.typicode.com/users/1 pour les informations de l'utilisateur avec l'ID 1.

L'URL pour récupérer les posts de l'utilisateur avec l'ID 1 : https://jsonplaceholder.typicode.com/posts?userId=1

Vous allez dans une `<dl>` indiquer certaines informations concernant l'utilisateur : son nom, son email et son site internet.

Vous allez ensuite afficher une liste d'articles correspondant Ã  ses posts.


*/