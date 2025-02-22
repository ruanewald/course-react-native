class Pessoa {
    constructor(nome = 'Genérico', idade = 0) {
        this.nome = nome
        this.idade = idade
    }
    mostrarinfo(){
        console.log(`Essa pessoa de chama ${this.nome} e tem ${this.idade} anos`)
    }
}
const pessoa1 = new Pessoa('Ruan', 22)
pessoa1.mostrarinfo()
console.log(pessoa1)

