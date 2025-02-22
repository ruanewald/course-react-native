class Produto{
    constructor(nome = 'Genérico', preco = 0.0, estoque = 0){
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
        }
    
    exibirInfo(){
        console.log(`O produto :${this.nome}, custa R$${this.preco} e temos ${this.estoque} unidades.`)
        }
}
const produto1 = new Produto('Celular', 1000, 10)
console.log(produto1)
produto1.exibirInfo()

