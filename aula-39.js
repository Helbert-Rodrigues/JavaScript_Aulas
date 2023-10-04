const PropriedadePadrao = (ValorInicial) => ({
  value: ValorInicial,
  writable: true,
  configurable: false,
  enumerable: true,
});

class Usuario {
  // nome;
  // senha;
  // email;

  constructor(nome, senha, email) {
    Object.defineProperties(this, {
      nome: PropriedadePadrao(nome),
      senha: PropriedadePadrao(senha),
      email: PropriedadePadrao(email),
    });
  }
}
const ClassUsuario = new Usuario("Helbert", 12345, "Gmail@gmail.com.br");
-console.log(ClassUsuario);
