console.log(typeof Array, typeof new Array, typeof [])

let Aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(Aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Ruan'
console.log(aprovados[3])

aprovados.push('Abia')
console.log(aprovados)

// Para ver quantos elementos tem na lista de itens/array
console.log(aprovados.length) 

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] == undefined)
console.log(aprovados[8] == null) 

console.log(aprovados)

aprovados.sort()
console.log(aprovados)

/* Desafio: Lista de Tarefas

OK Crie um array chamado tarefas e adicione três tarefas do seu dia a dia (por exemplo, "Estudar", "Treinar", "Ler um livro").

OK Exiba todas as tarefas no console.

Adicione uma nova tarefa ao final do array.

Remova a primeira tarefa da lista.
Exiba a lista atualizada no console. */

let tarefas = new Array('Estudar', 'Treinar', 'Ler um livro')
console.log(tarefas)
tarefas.push('Toma Água')

// Agora vou fazer mostando todos os itens listados

console.log(tarefas)

// O comando abaixo faz remover um item da lista

tarefas.shift()
console.log(tarefas)


