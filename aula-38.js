class Usuario {
  // nome;
  // senha;
  // email;

  constructor(nome, senha, email) {
    Object.defineProperties(this, {
      nome: {
        value: nome,
        writable: true,
        configurable: false,
        enumerable: true,
      },
      email: {
        value: email,
        writable: true,
        configurable: false,
        enumerable: true,
      },
      senha: {
        value: senha,
        writable: true,
        configurable: false,
        enumerable: true,
      },
    });
  }
}
const ClassUsuario = new Usuario("Helbert", 12345, "Gmail@gmail.com.br");
console.log(ClassUsuario);
