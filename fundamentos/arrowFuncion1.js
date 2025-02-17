let dobro = function() {
    return 2* a
}

// aogra com a função arrow
dobro= (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui um param
console.log(ola())
