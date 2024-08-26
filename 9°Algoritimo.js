/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/


metasSemana = []
meta1 = prompt("Adicione a primeira meta da sua lista de metas");
meta2 = prompt("Adicione a segunda meta da sua lista de metas");
meta3 = prompt("Adicione a terceira meta da sua lista de metas");
metasSemana = [meta1, meta2, meta3];
if (metasSemana[1] !== "exercício físico") {
    metasSemana.splice(1, 1, "praticar esportes");
}
console.log(metasSemana)