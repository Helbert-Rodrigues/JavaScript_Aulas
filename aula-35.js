class Usuario {
  email;
  senha;
  nome;

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
console.log(adm);
console.log("senha:", adm.senha);

class Comprador extends Usuario {
  compras;

  constructor(compras, email, senha, nome) {
    super(email, senha, nome);
    this.compras = compras;
  }
}

const comprador = new Comprador();
comprador.senha = "Nova Senha";

console.log(comprador);
