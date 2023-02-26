const numeros = [34, 25, 10, 45, 90];

const numerosReduzidos = numeros.reduce((acumulado, elemento) => {
 return acumulado += elemento
},0);

console.log(numerosReduzidos);