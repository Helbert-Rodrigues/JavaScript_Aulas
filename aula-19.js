function calcular() {
  console.log("Calcular");
}

const calcular2 = function () {
  console.log("Calcular 2");
};

const calcular3 = () => {
  console.log("Calcular3");
};

const calcular4 = () => {
  return "Calcular4";
};

calcular();

calcular2();

calcular3();

const X = calcular4();
console.log(X);
