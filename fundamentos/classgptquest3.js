class Livro{
    constructor(titulo = 'Genérico', autor = 'Genérico', anoDePublicacao = 'Genérico'){
        this.titulo = titulo
        this.autor = autor
        this.anoDePublicacao = anoDePublicacao
    }
    exibirinfo(){
        console.log(`O Livro ${this.titulo} foi escrito pelo autor ${this.autor} no ano de ${this.anoDePublicacao}`)
    }
}
const livro1 = new Livro('Titular', 'Autoridade', 1700)
console.log(livro1)
livro1.exibirinfo()
