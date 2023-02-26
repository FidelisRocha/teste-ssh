function Pizza (molho, ingredientes, preco, tamanho) {
    this.molho = molho;
    this.ingredientes = ingredientes;
    this.preco = preco;
    this.tamanho = tamanho
    // Preparar Pizza
    this.unirIngredientes = () => {
        return this.molho + " " + this.ingredientes;
    }
}

let pizza1 = new Pizza("Tomate,", "Queijo, Presunto e Musarelha", 50.90, "30cm")
console.log(pizza1.unirIngredientes());