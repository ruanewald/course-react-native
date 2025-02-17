// processo de desestruturação usando a estrutura do array
// mostrando posição onde não tem sentido usar um array literal
// no caso do objeto é a chave {} e do arrey é o colchete []
// preciso saber se estou definindo o array ou utilizando o operador destructuring      
// const [a]
const [a] = [10]
console.log(a) 

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// possibilidade de utilização mas não utilizado pois é um código de difícil leitura
// ignore o primeiro elemento, primeiro array, vá para o segundo, o primeiro elemento não interessa
// quero o segundo elemento do segundo array, ignorou o 9 e vai pegar o 6
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

