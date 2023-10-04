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

const resultadoSome = lista.some(
  (objeto, outro) => objeto.idade > 50 && outro.nome === "Gabhhi"
); //Precisa de só um pra dar true.
const resultadoEvery = lista.every((objeto) => objeto.idade < 150); //Precisa de todos pra dar true.
console.log("ResultadoSome:", resultadoSome);
console.log("ResultadoEvery", resultadoEvery);
