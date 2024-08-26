/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = []
item1 = prompt("Adicione o primeiro item na sua lista de compras")
item2 = prompt("Adicione o segundo item na sua lista de compras")
item3 = prompt("Adicione o terceiro item na sua lista de compras")
listaCompras = [item1, item2, item3]

if (listaCompras[listaCompras.length] !== "leite") {
    listaCompras.push('leite');
  }
  
  console.log(listaCompras);