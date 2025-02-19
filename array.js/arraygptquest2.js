/* Desafio: Lista de Convidados 🎉

Crie um array chamado convidados com pelo menos 5 nomes.

Remova o último convidado da lista.

Adicione um novo convidado no início da lista.

Verifique se um determinado nome está na lista (por exemplo, "Ana"). Se estiver, exiba "Ana está na lista!", senão, exiba "Ana não foi convidada.".

Mostre a lista final no console.
*/

let convidados = new Array('Ruan', 'Lauro', 'Elon', 'Elvis', 'Post Malone')
convidados.pop()
convidados.push('Ramon')
if (convidados.includes('Ruan')){
    console.log('Ruan está na lista!')}
else {
    console.log('Ruan não foi convidado!')
}
console.log(convidados)
