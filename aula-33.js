const lista = [
  {
    nome: "Jose",
    idade: 13,
    cartoes: ["4654", "5799", "2968"],
  },
  {
    nome: "Gabi",
    idade: 45,
    cartoes: ["5345", "7866", "4567"],
  },
  {
    nome: "Julia",
    idade: 78,
    cartoes: ["9634", "3284", "4786"],
  },
  {
    nome: "Natalia",
    idade: 45,
    cartoes: ["8936", "9654", "2135"],
  },
  {
    nome: "Kamila",
    idade: 87,
    cartoes: ["5456", "8868", "9865"],
  },
  {
    nome: "Jessica",
    idade: 96,
    cartoes: ["6364", "6854", "3512"],
  },
];

const arreyDeCartoes = lista.flatMap((objeto) => objeto.cartoes); //vai pegar os arrey e transformar em um só.

console.log(arreyDeCartoes);
