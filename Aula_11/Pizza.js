function Pizza(molho, ingredientes, preco, tamanho){
    this.molho = molho;
    this.ingredientes = ingredientes;
    this.preco = preco;
    this.tamanho = tamanho;

    //PREPARAR PIZZA
    this.unirIngredientes = () => {
        return this.ingredientes + " " + this.preco;
    }     
}

let pizza1 = new Pizza("Tomate", "Queijo Presunto Mussarelha", 29.99, "30cm");
let pizza2 = new Pizza("Branco", "Queijo C/ Carne Seca", 45.85, "30cm");
let pizza3 = new Pizza("Tomate", "Queijo C/ Camarão", 25.50, "15cm");
console.log(pizza1.unirIngredientes());