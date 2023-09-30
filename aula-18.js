function calcular(valor) {
  if (valor === 0) {
    throw new Error("Não pode ser 0");
  }
  return valor / 2;
}
try {
  const resultado = calcular(7);
  console.log("Resultado", resultado);
} catch (error) {
  console.log(error.message);
}
console.log("Continua...");
