/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

let tarefas = [];   
let Tarefas = prompt("Adicione 3 itens na lista de tarefas");
tarefas.push(Tarefas);
tarefas.shift();
tarefas.push("ligar para o medico");
console.log(tarefas);   