const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const aguardar = async () => {
  console.log("PASSOU", 2 ** 2);
  await sleep(3000);
  console.log("PASSOU", 3 ** 3);
  console.log("PASSOU", 4 ** 4);
  console.log("PASSOU", 5 ** 5);
};
aguardar();
