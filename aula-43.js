class Produto {
  nome;
  preco;
  descricao;
  codigo;
  quantidade_em_estoque;

  alterarPreco(novoPreco) {
    if (novoPreco >= 0) {
      this.preco = novoPreco;
    } else throw new Error("O valor não pode ser negativo!!!");
  }

  adicionarEstoque(quantidade) {
    this.quantidade_em_estoque += quantidade;
  }

  removerEstoque(quantidade) {
    this.quantidade_em_estoque -= quantidade;
    if (this.quantidade_em_estoque <= 0) {
      throw new Error("O Estoque não pode fica negativo!!!");
    }
  }

  constructor(nome, descricao, codigo) {
    this.nome = nome;
    this.descricao = descricao;
    this.codigo = codigo;
    this.preco = 0;
    this.quantidade_em_estoque = 0;
  }
}

class Smartphone extends Produto {
  marca;
  modelo;
  sistema_operacional;

  descricao() {
    marca;
    modelo;
    sistema_operacional;
    nome;
    preco;
    descricao;
    codigo;
    quantidade_em_estoque;
  }

  constructor(nome, descricao, codigo, marca, modelo, sistema_operacional) {
    super(nome, descricao, codigo);
    this.marca = marca;
    this.modelo = modelo;
    this.sistema_operacional = sistema_operacional;
  }
}

const Smartephone1 = new Smartphone(
  "Iphone",
  "Celular",
  "794654",
  "Apple",
  "Iphone 15",
  "IOS"
);

Smartephone1.alterarPreco(4000);
Smartephone1.adicionarEstoque(152);
Smartephone1.removerEstoque(100);

console.log(Smartephone1);
