// novo recurso introduzido ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000 
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome : n, idade: i} = pessoa
console.log(n, i)


const {sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereço: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero,cep)

// quando tentar desestruturar um dado, precisa ter certeza que o dado (caminho) está setado
const {conta: {ag, num}} = pessoa
console.log(ag, num)


