const fruta = prompt("Digite uma fruta: ");

const frutas = ["Caju", "Manga", "Pera"];
console.log(frutas.splice(1));

// console.log(frutas[ frutas.length - 1]);

frutas.push('Laranja');
// frutas.pop()

// console.log(frutas,indexOF('Abacaxi'));

if(frutas.indexOf(fruta) === -1) {
    console.log("ESSA FRUTA NÃO EXISTE NESTA LISTA");
    frutas.push(fruta);
    console.log(frutas);
}

alert(frutas);