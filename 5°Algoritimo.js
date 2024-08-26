/*
Pedro está organizando seus filmes favoritos. Crie um array chamado filmesFavoritos com três filmes de sua escolha. 
Modifique o primeiro filme para um novo título. Verifique se o último filme da lista é "Harry Potter". 
Se não for, adicione "Harry Potter" ao final da lista. Imprima a lista de filmes favoritos no final.
*/

filmesFavoritos = ["Donnie Darko", "La La Land", "Pulp Fiction"]
filmesFavoritos.splice(0, 1, "Transformers Bumblebee 2"); 
if (filmesFavoritos[filmesFavoritos.length] !== "Harry Potter") {
        filmesFavoritos.push('Harry Potter');
    }
    
    console.log(filmesFavoritos);