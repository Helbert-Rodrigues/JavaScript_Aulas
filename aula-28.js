const lista = [
  {
    nome: "Jose",
    idade: 13,
  },
  {
    nome: "Gabi",
    idade: 45,
  },
  {
    nome: "Julia",
    idade: 78,
  },
  {
    nome: "Natalia",
    idade: 45,
  },
  {
    nome: "Kamila",
    idade: 87,
  },
  {
    nome: "Jessica",
    idade: 96,
  },
];

const NovaPessoa = lista.find((Pessoa) => Pessoa.idade > 70);

console.log(NovaPessoa);

const PrimeiraPessoa = (pessoa) => pessoa.nome === "Gabi";
const Resultado = lista.find(PrimeiraPessoa);
console.log(Resultado);
