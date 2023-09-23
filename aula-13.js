function multiplos13(valor1, valor2) {
  let maior = 0;
  let menor = 0;
  let soma = 0;

  if (valor1 > valor2) {
    maior = valor1;
    menor = valor2;
  } else {
    maior = valor2;
    menor = valor1;
  }

  for (menor; menor <= maior; menor++) {
    if (menor % 13 !== 0) {
      soma = soma + menor;
    }
  }
  return soma;
}

const resultado = multiplos13(100, 200);
console.log(resultado);
