const lista = [57, 54, 97, 67, 65];
const lista2 = [979, 674, 345, 789, 978];

const listaJunta = lista.concat(lista2);
console.log(listaJunta);

const ListaJunta2 = lista + lista2;
console.log(ListaJunta2);

const ListaJunta3 = [lista, lista2];
console.log(ListaJunta3);

const ListaJunta4 = {
  ...lista,
  ...lista2,
};
console.log(ListaJunta4);
