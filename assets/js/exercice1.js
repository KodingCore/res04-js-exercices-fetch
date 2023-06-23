window.addEventListener("DOMContentLoaded", function(){
    let url = "https://jsonplaceholder.typicode.com/users"

    fetch(url)

        .then(function(response) {
            return response.json();
        })

        .then(function(result) {
            console.log(result);
            const usersListNode = document.getElementById("users-list");
            
            result.forEach(element => {
                const newUserElement = document.createElement("li");
                usersListNode.appendChild(newUserElement);
                newUserElement.textContent = element.name;
            });
            
    });


})