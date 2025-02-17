const pessoa = { 
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() 
// conflito de paradigmas: funcional e OO, orientada a objeto

const FalarDePessoa = pessoa.falar.bind(pessoa)
FalarDePessoa()

