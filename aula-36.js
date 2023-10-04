class Usuario {
  email;
  senha;
  nome;

  validarSenha(email, senha) {
    return email === this.email && senha === this.senha;
  }

  constructor(email, senha, nome) {
    this.email = email;
    this.senha = senha;
    this.nome = nome;
  }
}

class Administrador extends Usuario {
  permissoes;

  constructor(permissoes, email, senha, nome) {
    super(email, senha, nome);
    this.permissoes = permissoes;
  }
}

const adm = new Administrador([1, 6], "Email@email.com", 12324, "Helbert");
console.log(adm.validarSenha("Email@email.com", 12324));
