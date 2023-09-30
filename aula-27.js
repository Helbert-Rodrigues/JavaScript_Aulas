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

const listaFiltrada = lista.filter((Filtro) => Filtro.idade > 50);

console.log(lista);

console.log(listaFiltrada);

const FiltrarPessoa = (pessoa) => pessoa.idade > 40;
const Resultado = lista.filter(FiltrarPessoa);
console.log("Resultado:", Resultado);
