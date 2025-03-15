const quaseArray = {0: 'Rafael', 1:'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false  
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString() , meuArray)

// A partir de um objeto pode-se ter uma estrutura muito parecida com array

// Mas, um ARRAY tem mais funções, coisas que podem ser feitas em cima de um array
// Não fazendo sentido simular um array em cima de um objeto
//

