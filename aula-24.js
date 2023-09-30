const jose = {
  idade: 35,
  peso: 80,
  nome: "José",
  genero: "Masculino",
  nacionalidade: "Brasileiro",
  endereco: "Rua Qualquer",
  numero: 466,
  pais: "Brasil",
  temFilhoes: true,
};

const exibirInformções = (pessoa) => {
  console.log("Dados:", pessoa);
  console.log("Dados idade:", pessoa.idade);
};
exibirInformções(jose);
