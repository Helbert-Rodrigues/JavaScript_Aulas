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

console.log(lista.map((objetos) => objetos.nome));
console.log(lista.map((Objeto) => Objeto.idade));
// ou

const objetodalista = (objeto) => {
  return objeto.nome;
};

console.log(lista.map(objetodalista));
