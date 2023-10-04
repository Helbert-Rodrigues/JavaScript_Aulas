class Pessoa {
  nome;
  idade;
  filhos;

  constructor(nome, idade, filhos) {
    this.nome = nome;
    this.idade = idade;
    this.filhos = filhos;
  }
}

const filho1 = new Pessoa("Gustavo", 13);
const filho2 = new Pessoa("Gabriela", 23);

const pessoa = new Pessoa("José", 54, [filho1, filho2]);

console.log(pessoa);
