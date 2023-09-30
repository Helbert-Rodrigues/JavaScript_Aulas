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

const pessoas = lista.reduce((acumulador, objeto) => {
  return {
    ...acumulador,
    [objeto.nome]: {
      idade: objeto.idade,
    },
  };
}, {});

const convertChaves = Object.keys(pessoas);

console.log(convertChaves);

//OU

console.log(Object.keys(lista[0]));
