/*Desafio: Carrinho de Compras 🛒
Crie um array chamado carrinho e adicione três itens de supermercado (por exemplo, "Arroz", "Feijão", "Leite").
Adicione um novo item ao final do array.
Remova o primeiro item da lista.
Exiba a quantidade total de itens no carrinho.
Mostre todos os itens no console.*/
let carrinho = new Array('Arroz', 'Feijão', 'Leite')
carrinho.push('Melancia')
carrinho.shift()
console.log(carrinho.length)
console.log(carrinho)
