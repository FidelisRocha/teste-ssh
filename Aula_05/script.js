let num1 = Number(prompt("DIGITE O UM NUMERO; "));
let num2 = Number(prompt("DIGITE O SEGUNDO NUMERO; "));

// Chamada das funções
const somar = (n1, n2) => n1 + n2;  

const multiplicar = (n1, n2) => n1 * n2;

const subitracao = (n1, n2) => n1 - n2;

const dividir = (n1, n2) => n1 / n2;
    
const soma = somar(num1, num2);
const multiplica = multiplicar(num1, num2);
const subitraca = subitracao(num1, num2);
const dividi = dividir(num1, num2);

document.write( `SOMAR: ${soma} | MULTIPLICAO: ${multiplica} | SUBITRACAO: ${subitraca} | DIVIDIR: ${dividi}` );