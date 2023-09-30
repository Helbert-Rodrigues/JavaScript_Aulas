function soma(valor) {
  if (valor === 0) {
    return (Error = 0);
  }
  return valor + soma(valor - 1);
}
try {
  const resultado = soma(10);
  console.log(resultado);
} catch (error) {
  console.log(error.message);
}
console.log("Continua...");
