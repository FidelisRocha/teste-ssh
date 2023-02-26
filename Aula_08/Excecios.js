const itens = [ "B", "R", "O", "R", "R"];

const itensFiltradas = itens.filter((elemento) => {
    return elemento == "R";
}).map((elemento) => {
    return `${elemento} B`
}) 

console.log(itensFiltradas);