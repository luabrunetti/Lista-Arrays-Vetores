/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/
tarefasLimpeza = []
tarefa1 = prompt("Adicione o primeiro item na sua lista de tarefas");
tarefa2 = prompt("Adicione o segundo item na sua lista de tarefas");
tarefa3 = prompt("Adicione o terceiro item na sua lista de tarefas");
tarefa4 = prompt("Adicione o quarto item na sua lista de tarefas");
tarefasLimpeza = [tarefa1, tarefa2, tarefa3, tarefa4];
tarefasLimpeza.splice (2, 1, "limpar banheiro");
console.log(tarefasLimpeza)