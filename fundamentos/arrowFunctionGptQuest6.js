const aocontrario = (contrario) => contrario.split('').reverse().join('')
console.log(aocontrario('Ruan'))

const maiuscula = (letra) => letra.toUpperCase()
console.log(maiuscula('Ruan'))

const contarvogais = (vogal) => (vogal.match(/[aeiouAEIOU]/g) || []).length
console.log(contarvogais('Ruan'))


