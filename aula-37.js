// Object.definePropeties // declara varias propriedades.
// Object.defineProperty // declara só uma propriedade.

class Usuario {
  // nome;
  // senha;
  // email;

  constructor(nome, senha, email) {
    Object.defineProperty(this, "nome", {
      value: nome,
      writable: true,
      configurable: false,
      enumerable: true,
    });

    this.senha = senha;

    Object.defineProperty(this, "email", {
      value: email,
      writable: true,
      configurable: false,
      enumerable: true,
    });
  }
}
const ClassUsuario = new Usuario("Helbert", 12345, "Gmail@gmail.com.br");
console.log(ClassUsuario);
