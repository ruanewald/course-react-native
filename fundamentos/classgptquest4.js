class Aluno{
    constructor(nome = 'Genérico', idade = 1000, nota = 1000){
        this.nome = nome
        this.idade = idade
        this.nota = nota
    }
    exibirnota(){
        console.log(`O aluno ${this.nome}, que tem ${this.idade}, tirou a nota:${this.nota}`)
    }
}
const aluno1 = new Aluno('Ruan', 22, 10) 
console.log(aluno1)
aluno1.exibirnota()
