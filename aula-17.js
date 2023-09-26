function teste(key) {
  switch (key) {
    case "Helberttt":
    case "Julio":
      console.log("Primeiro");
      break;
    case "Gabi":
      console.log("Segundo");
      break;
    case "Helbert":
      console.log("Terceiro");
      break;

    default:
      console.log("Passou direto");
      break;
  }
}
teste("Helbert");
