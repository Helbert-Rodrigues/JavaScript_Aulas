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

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

let soma = 0;

for (let i = 0; i < lista.length; i++) {
  soma = soma + lista[i].idade;
}
console.log(soma);
