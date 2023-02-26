const notas = [7.5, 8.0, 0.2, 6.7, 5]

const notasFiltradas = notas.filter((elemento) => {
    return elemento > 7;
}).map((elemento) => {
    return `${elemento} => APROVADO`
})

console.log(notasFiltradas);