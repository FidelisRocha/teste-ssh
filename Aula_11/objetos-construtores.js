function Pessoa (id, nome, sobrenome, idade, identidade) {
  this.id = id;
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.identidade = identidade;
  
  //METODO DE UM OBJETO OU CLASSE
  this.unirNome = () => {
    return this.nome + " " + this.sobrenome;
  }
}

let pessoa1 = new Pessoa(001, "Fidelis", "Rocha", "27", "141...");

console.log(pessoa1.id, pessoa1.idade, pessoa1.identidade);

console.log(pessoa1.unirNome());
