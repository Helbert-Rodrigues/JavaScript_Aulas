const qualquer = {
  abc: "fdsa",
  flkd: "fdsa",
  fdsfj: "joijo",
  uioer: "kjhk",
};

const novoQualquer = {
  abc: qualquer.abc,
  flkd: qualquer.flkd,
  fdsfj: qualquer.fdsfj,
  uioer: qualquer.uioer,
  final: "Final1",
};

const qualquer2 = {
  ...qualquer,
  final: "Final2",
};

console.log(qualquer);
console.log(novoQualquer);
console.log(qualquer2);
