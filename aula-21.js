const test1 = () => {
  setTimeout(() => {
    console.log("test1");
  }, 4000);
};
const test2 = () => {
  setTimeout(() => {
    console.log("test2");
    funcaoCallBack();
  }, 3000);
};
const test3 = () => {
  setTimeout(() => {
    console.log("test3");
  }, 2000);
};
const test4 = () => {
  setTimeout(() => {
    console.log("test4");
  }, 1000);
};

const funcaoCallBack = () => {
  console.log("SALVOU O USUARIO");
};

test1();
test2(funcaoCallBack);
test3();
test4();
