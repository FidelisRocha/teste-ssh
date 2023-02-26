const pessoas = [
    {
        id: "Kakarotto",
        nome: "Goku",
        idade: 100,
        cpf: "800.054.309-04"
    },
    {
        id: "Kurama",
        nome: "Naruto",
        idade: 50,
        cpf: "500.054.309-04"
    },
    {
        id: "GonGon",
        nome: "Luffy",
        idade: 80,
        cpf: "100.054.309-04"
    },
    {
        id: "OnePunh",
        nome: "Saitama",
        idade: 25,
        cpf: "032.054.309-04"
    },
    {
        id: "GodGirl",
        nome: "Medaka",
        idade: 20,
        cpf: "002 .054.309-04"
    }
]

const pessoasFiltradas = pessoas
.filter(pessoa => pessoa.idade > 60)
.forEach(pessoa => console.log(pessoa.nome));

// const pessoasFiltradas = pessoas.filter((pessoa, indice) => {
//     return pessoa.idade > 60;
// }).forEach((pessoa) => {
//     console.log(pessoa.nome)
// })

// console.log(pessoas[0].nome);
// console.log(pessoas[1].nome);
// console.log(pessoas[2].nome);
// console.log(pessoas[3].nome);
// console.log(pessoas[4].nome);