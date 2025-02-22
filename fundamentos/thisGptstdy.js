const pessoa = {
    nome : 'Ruan',
    dizerNome: function() {
        console.log(this.nome)
    }
}
pessoa.dizerNome()

const carro = {
    marca: 'Honda',
    dizerMarca: function(){
        console.log(this.marca)
    }
}
carro.dizerMarca()

function Usuario(nome) {
    this.nome = nome
    this.dizerola = function(){
        console.log('Olá, sou o ' +this.nome)
    }
}
const usuario1 = new Usuario('Generico')
usuario1.dizerola()
    