class Produto {
  nome;
  preco;
  descricao;
  codigo;
  quantidade_em_estoque;

  alterarPreco(novoPreco) {
    if (novoPreco >= 0) {
      this.preco = novoPreco;
    } else treo;
  }

  adicionarEstoque(quantidade) {
    this.quantidade_em_estoque += quantidade;
  }

  removerEstoque(quantidade) {
    const NovoEstoque = this.quantidade_em_estoque - quantidade;
    if ((NovoEstoque = 0)) {
      this.quantidade_em_estoque = NovoEstoque;
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
  "Aple",
  "794654",
  "Apple",
  "15",
  "IOS"
);

console.log(Smartephone1);
