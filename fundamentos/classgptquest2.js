/*
Desafio:
Crie uma classe Carro que tenha:

Propriedades: marca, modelo e ano.
Método: infoCarro() que deve exibir uma mensagem no formato: "O carro é um [marca] [modelo] de [ano]."
Depois, crie uma instância dessa classe e chame o método para exibir as informações do carro.

Tente fazer e me avise se precisar de ajuda! 😊
*/
class Carro{
    constructor(marca = 'Genérico', modelo = 'Genérico', ano = 2025) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    infocarro(){
        console.log(`O carro é ano ${this.ano}, marca ${this.marca} e modelo ${this.modelo}`)
    }
}
const carro1 = new Carro('Ruan', 'Gamer', 2040)
console.log(carro1)
carro1.infocarro()
