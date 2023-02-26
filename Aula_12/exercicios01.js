class Pessoa {
    constructor(nome) {
        this._nome = nome
    }
   apresentar() {
    return `${this._nome}`
   }
}

let pessoa = new Pessoa("Fidelis");

console.log(pessoa.apresentar());