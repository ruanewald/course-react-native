const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// Primeiro método .pop, que remove o ultimo elemento do array
pilotos.pop()
console.log(pilotos)

// adiciona um elemento na lista
pilotos.push('Verstappen')
console.log(pilotos)

// .shift remove o priemiro elemento da lista
pilotos.shift('')
console.log(pilotos)

// .unshift adiciona um elemento no início da array
pilotos.unshift('Hamilton')
console.log(pilotos)

// .splice adiciona ou remove elementos no array
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos) 
/* aqui nesse caso foi adicionado no elemento 2, não removeu nenhum(0)
onde foi adicionado os dois elementos que adicionei antes do Raikkonen*/

// remover elementos usando o splice
pilotos.splice(3,1)
console.log(pilotos)

// usando método slice
// gera novo array
// no caso a partir do indice 2 ('Bottas', 'Raikkonen', 'Verstappen')
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// O slice é pegar uma parte do array
const algunsPilotos2 = pilotos.slice(1, 4)
// o último indice que eu indico não entra, nesse caso o 4
console.log(algunsPilotos2)

