class Produto { 
  constructor(paramNome, paramPreco){
       this.nome = paramNome; 
       this.preco = paramPreco;     
  }
  
  calculaDesconto() { 
      return this.preco * 0.1; 
      } 
} 
let produto1 = new Produto("Blusa", 120);
let produto2 = new Produto("Calça", 300);
produto1.calculaDesconto(); //12 
produto2.calculaDesconto(); //30

console.log(typeof(produto1))
