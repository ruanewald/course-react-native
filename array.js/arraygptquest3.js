// Criando uma lista de convidados

let convidados = [
    {nome: 'Ruan', idade: 22},
    {nome: 'Bart', idade: 22},
    {nome: 'Hommer', idade: 40},
    {nome: 'Lisa', idade: 18},
    {nome: 'Meggie', idade: 1}
]

// Adicionando um novo convidado na lista com comando push

console.log(convidados)
convidados.push({Nome: 'Mageri', idade: 40})
console.log(convidados)

// Descobrindo quem é o convidado mais velho

let maisVelho = convidados.reduce((maisVelho, convidado) => {
    return (convidado.idade > maisVelho.idade) ? convidado : maisVelho;
});

console.log(maisVelho)

// Removendo convidado mais velho

let index = convidados.indexOf(maisVelho);
convidados.splice(index, 1);

console.log(convidados)

// Organizando lista por idade

convidados.sort((a, b) => a.idade - b.idade);
console.log(convidados)







