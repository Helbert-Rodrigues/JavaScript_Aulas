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
      nome: {
        get: () => nome,
        set: (value) => (nome = value),
      },
      senha: {
        get: () => senha,
        set: (value) => {
          if (value.length < 4) {
            throw new TypeError("Não pode ter menos de 4 caracteres.");
          }
          senha = value;
        },
      },
      email: {
        get: () => email,
        set: (value) => (email = value),
      },
    });
  }
}
const ClassUsuario = new Usuario("Helbert", "Senha123", "Gmail@gmail.com.br");
ClassUsuario.senha = "ihlkkli";
console.log(ClassUsuario.nome);
console.log(ClassUsuario.senha);
console.log(ClassUsuario.email);
