const idade = 8;
let podeEntrar = false;

if (idade >= 8) {
  podeEntrar = true;
} else {
  console.log("NÃO ENTRA!!!");
}
console.log("Usuário pode entrar", podeEntrar);

// OU

const numero = 15;
const nome = "Gabi";

if (numero >= 18 && nome === "Gabi") {
  console.log(numero, "/", nome);
} else {
  console.log("Informações Invalidas");
}
