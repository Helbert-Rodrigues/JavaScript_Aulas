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

lista.sort((a, b) => {
  if (a.idade < b.idade) {
    return -1;
  }
  if (a.idade > b.idade) {
    return 1;
  }
  return 0;
});

console.log(lista);
