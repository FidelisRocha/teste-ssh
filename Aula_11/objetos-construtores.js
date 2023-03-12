function Pessoa(id, nome, sobrenome, idade, indetidade){
    this.id = id;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.indetidade = indetidade;
}

let pessoa1 = new Pessoa(001, "Fidelis", "Rocha", "27", "141...");
let pessoa2 = new Pessoa(002, "Priscila", "Pires", "27", "009...");
let pessoa3 = new Pessoa(003, "Vanderlei", "Ruste", "42", "336...");
console.log(pessoa1.id, pessoa1.nome, pessoa1.sobrenome, pessoa1.idade, pessoa1.indetidade);
