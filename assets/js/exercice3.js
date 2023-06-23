window.addEventListener("DOMContentLoaded", function(){

    const bodyNode = document.querySelector("body");
    

    let url = "https://jsonplaceholder.typicode.com/posts/1";

    fetch(url)

        .then(function(response) {
            return response.json();
        })

        .then(function(result) {
            console.log("url first:   >>");
            console.log(result.title);

            let newArticleNode = document.createElement("article");
            bodyNode.appendChild(newArticleNode);

            const newHeaderNode = document.createElement("header");
            newArticleNode.appendChild(newHeaderNode);

            const titleArticleNode = document.createElement("h2");
            newHeaderNode.appendChild(titleArticleNode);
            titleArticleNode.textContent = result.title;

            const bodyArticleNode = document.createElement("p");
            newArticleNode.appendChild(bodyArticleNode);
            bodyArticleNode.textContent = result.body;

            const newHFooterNode = document.createElement("footer");
            newArticleNode.appendChild(newHFooterNode);

            url = "https://jsonplaceholder.typicode.com/comments?postId=1";

            fetch(url)

                .then(function(response) {
                    return response.json();
                })
            
                .then(function(result) {
                    console.log("url second:   >>");
                    console.log(result);

                    const newHFooterNode = document.createElement("footer");
                    newArticleNode.appendChild(newHFooterNode);
                
                    result.forEach(element => {
                        const commentaireNode = document.createElement("p");
                        newHFooterNode.appendChild(commentaireNode);
                        commentaireNode.textContent = element.body;
                });
            });
        });


    


})

/*

## Exercice 3 : Récupérer les commentaires d'un post

_Fichiers : `exercice3.html` et `exercice3.js`._

Pour récupérer la liste des commentaires d'un post : https://jsonplaceholder.typicode.com/comments?postId=1 
en modifiant l'id du post dans l'URL.

Pour récupérer les infos d'un post : https://jsonplaceholder.typicode.com/posts/1 
en modifiant l'id du post dans l'URL si nécessaire.

Dans un `<article>` affichez le titre du post dans le `<header>` de l'article, 
le body du post dans un `<p>` et la liste des commentaires du post dans le `<footer>` de l'article.


*/