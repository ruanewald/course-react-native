// usando objeto e array 

function rand( {min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
// nesse caso não posso tentar passar número randomico sem passar objeto nehum
// vai ter problemas pois ele tenta desestruturar algo que está indefinido ou nulo
// console.log(rand())

