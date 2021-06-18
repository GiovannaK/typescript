export class Carrinho {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 50);
const produto2 = new Produto('Caneca', 15);
const produto3 = new Produto('Caneta', 1);
console.log(produto1.nome);

const carrinho = new Carrinho();
carrinho.inserirProdutos(produto1, produto2, produto3);
console.log(carrinho.valorTotal());
console.log(carrinho.quantidadeProdutos());
