// par nome/valo 
const saudacao = 'Opa' // contexto léxico 1 - local no qual a variável foi difinida fisicamente no código


function exec() {
    const saudacao ='Faaala' //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nomes/valor
const cliente = {
    nome: 'Pedro', 
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua muito legal', 
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
